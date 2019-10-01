const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  debugger;

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("new note added:"), title);
  } else {
    console.log(chalk.yellow.inverse("note title already taken:"), title);
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("note removed:"), title);
  } else {
    console.log(chalk.yellow.inverse("no note found:"), title);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(
      chalk.green.inverse("note found:"),
      note.title,
      "\n",
      note.body
    );
  } else {
    console.log(chalk.yellow.inverse("no note found:"), title);
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

module.exports = {
  loadNotes,
  removeNote,
  readNote,
  addNote
};
