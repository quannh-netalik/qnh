const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const cliSpinners = require('cli-spinners');
const inquirer = require('inquirer');
const open = require('open');
const ora = require('ora');
const request = require('request');

const { gmail, ref, urlRef } = require('./data');

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What can I do for you?',
    choices: [
      {
        name: `Send me an ${chalk.bold('Email')}?`,
        value: () => {
          open(`mailto:${gmail}`);
          console.log('\nDone, see you soon at inbox.\n');
          console.log('In case mail did not pop up, please send via: ');
          console.log(`${chalk.bold(gmail)}\n`);
        },
      },
      {
        name: `See my ${chalk.bold('Resume')}?`,
        value: () => {
          open(ref.resume);
          console.log('\nDone, opened portfolio.\n');
        },
      },
      {
        name: `Download my ${chalk.bold('Resume')}?`,
        value: () => {
          // init loader
          const loader = ora({
            text: ' Downloading Resume',
            spinner: cliSpinners.aesthetic,
          }).start();

          // request to resume endpoint
          const pipe = request(ref.resume).pipe(
            fs.createWriteStream('./qnh-titus-resume.pdf'),
          );

          pipe.on('finish', function _download() {
            const downloadPath = path.join(
              process.cwd(),
              'qnh-titus-resume.pdf',
            );
            console.log(`\nResume Downloaded at ${downloadPath} \n`);

            // open the resume after downloaded
            open(downloadPath);
            loader.stop();
          });
        },
      },
      {
        name: `Schedule a ${chalk.redBright.bold('Meeting')}?`,
        value: () => {
          open(`${urlRef.calendly}${ref.calendly.user}/${ref.calendly.event}`);
          console.log('\nSee you at the meeting!\n');
        },
      },
      new inquirer.Separator(),
      {
        name: `Nah, I'm good.`,
        value: () => {
          console.log('\nOkay, looking forward to see you. Bye bye!.\n');
        },
      },
    ],
  },
];

const promptQuestions = () =>
  inquirer
    .createPromptModule()(questions)
    .then((answers) => {
      answers.action();
    });

module.exports = promptQuestions;
