const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: chalk.blue.bold("adding a new note"),
  builder: {
    title: {
      describe: "adding note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(args) {
    console.log("adding", args.title);
  }
});

yargs.command({
  command: "remove",
  describe: chalk.blue.bold("removing a new note"),
  handler: function() {
    console.log("remove");
  }
});

yargs.command({
  command: "list",
  describe: chalk.blue.bold("list all notes"),
  handler: function() {
    console.log("list");
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
