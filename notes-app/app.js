const validator = require("validator");

const chalk = require("chalk");

console.log(`
  ${chalk.blue.inverse.bold("validator")} ${chalk.red(
  validator.isEmail("luiza.prata@gmail")
)}`);
