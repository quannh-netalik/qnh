#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const box = require('./box');
const promptQuestions = require('./questions');

// clear the terminal
process.stdout.write('\x1B[2J\x1B[0f');

/**
 * PRINT THE TABLE
 */
const self = boxen(box, {
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

/**
 * PROMPT QUESTIONS
 */
promptQuestions();
