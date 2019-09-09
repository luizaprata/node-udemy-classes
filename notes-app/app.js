const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: chalk.blue.bold("adding a new note"),
  builder: {
    title: {
      describe: chalk.yellow("adding note title"),
      demandOption: true,
      type: "string"
    },
    body: {
      describe: chalk.yellow("adding note body"),
      type: "string"
    }
  },
  handler: function(args) {
    notes.addNote(args.title, args.body);
  }
});

yargs.command({
  command: "remove",
  describe: chalk.blue.bold("removing a new note"),
  builder: {
    title: {
      describe: chalk.yellow("adding note title"),
      demandOption: true,
      type: "string"
    }
  },
  handler: function() {
    notes.removeNote(args.title);
  }
});

yargs.command({
  command: "list",
  describe: chalk.blue.bold("list all notes"),
  handler: function() {
    notes.loadNotes();
  }
});

yargs.command({
  command: "read",
  describe: chalk.blue.bold("read a note"),
  handler: function() {
    console.log("read");
  }
});

yargs.parse();
