import chalk from 'chalk';
import config from 'config';

// Label for each information
const label = {
  gmail: chalk.white.bold('Gmail:'.padStart(10, ' ')),
  phone: chalk.white.bold('Phone:'.padStart(10, ' ')),
  linkedin: chalk.white.bold('Linkedin:'.padStart(10, ' ')),
  github: chalk.white.bold('Github:'.padStart(10, ' ')),
  skype: chalk.white.bold('Skype:'.padStart(10, ' ')),
  card: chalk.white.bold('Card:'.padStart(10, ' ')),
};

const {
  name,
  title,
  references: { gmail, github, linkedin, npx, phone, skype },
} = config.get('personal');

const { linkedinRef, githubRef, skypeRef } = config.get('reference-sites');

const link = {
  linkedin: chalk.grey(linkedinRef) + chalk.magentaBright(linkedin),
  github: chalk.grey(githubRef) + chalk.magentaBright(github),
  skype: chalk.grey(skypeRef) + chalk.magentaBright(skype),
  card: `${chalk.white('npx')} ${chalk.magentaBright(npx)}`,
};

const data = {
  name: ' '.padEnd(10) + chalk.bold.magenta(name),
  title: ' '.padEnd(10) + chalk.white(title),
  gmail: `${label.gmail} ${chalk.magentaBright(gmail)}`,
  phone: `${label.phone} ${chalk.magentaBright(phone)}`,
  linkedin: `${label.linkedin} ${link.linkedin}`,
  skype: `${label.skype} ${link.skype}`,
  github: `${label.github} ${link.github}`,
  card: `${label.card} ${link.card}`,
};

export default [
  data.name,
  data.title,
  '',
  data.gmail,
  data.phone,
  data.linkedin,
  data.skype,
  data.github,
  '',
  data.card,
  '',
  chalk.italic('Hi, my name is Titus. Nice to meet you!'),
  chalk.italic('My inbox is always open. Drop me a line if I can do'),
  chalk.italic('anything else for you.'),
  '',
  chalk.italic('Best Regards and Have a nice day! ^^'),
  chalk.italic('Titus Nguyen'),
].join('\n');
