import config from 'config';
import chalk from 'chalk';
import open from 'open';

const { gmail, portfolio } = config.get('personal.references');

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
          open(portfolio);
          console.log('\nDone, opened portfolio.\n');
        },
      },
      {
        name: `Nah, I'm good.`,
        value: () => {
          console.log('\nOkay, looking forward to see you. Bye bye!.\n');
        },
      },
    ],
  },
];

export default questions;
