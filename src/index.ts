import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';

import data from './box-data';
import questions from './questions';

// clear the terminal
process.stdout.write('\x1B[2J\x1B[0f');

const self = boxen(data, {
  margin: 1,
  float: 'center',
  padding: 1,
  borderStyle: 'round',
  borderColor: 'green',
  title: 'Information',
});

process.stdout.write(`${self}\n`);

const tip = `Tip: Try ${chalk.cyanBright.bold(
  'cmd/ctrl + click',
)} on the links above\n`;
process.stdout.write(`${tip}\n`);

const prompt = inquirer.createPromptModule();
prompt(questions).then((answers) => answers.action());
