const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("new note added!"));
  } else {
    console.log(chalk.yellow.inverse("note title already taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse(`note removed: ${note.title}`));
  } else {
    console.log(chalk.yellow.inverse(`no note found: ${note.title}`));
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = {
  loadNotes,
  removeNote,
  addNote
};
