const chalk = require('chalk');

const { name, title, gmail, phone, ref, urlRef } = require('./data');

// Label for each information
const label = {
  gmail: chalk.white.bold('Gmail:'.padStart(10, ' ')),
  phone: chalk.white.bold('Phone:'.padStart(10, ' ')),
  linkedin: chalk.white.bold('Linkedin:'.padStart(10, ' ')),
  github: chalk.white.bold('Github:'.padStart(10, ' ')),
  skype: chalk.white.bold('Skype:'.padStart(10, ' ')),
  card: chalk.white.bold('Card:'.padStart(10, ' ')),
};

const link = {
  linkedin: chalk.grey(urlRef.linkedin) + chalk.magentaBright(ref.linkedin),
  github: chalk.grey(urlRef.github) + chalk.magentaBright(ref.github),
  skype: chalk.grey(urlRef.skype) + chalk.magentaBright(ref.skype),
  card: `${chalk.white(urlRef.npx)} ${chalk.magentaBright(ref.npx)}`,
};

const box = [
  ' '.padEnd(10) + chalk.bold.magenta(name),
  ' '.padEnd(10) + chalk.white(title),
  '',
  `${label.gmail} ${chalk.magentaBright(gmail)}`,
  `${label.phone} ${chalk.magentaBright(phone)}`,
  `${label.linkedin} ${link.linkedin}`,
  `${label.skype} ${link.skype}`,
  `${label.github} ${link.github}`,
  '',
  `${label.card} ${link.card}`,
  '',
  chalk.italic('Hi, my name is Titus. Nice to meet you!'),
  chalk.italic('My inbox is always open. Drop me a line if I can do'),
  chalk.italic('anything else for you.'),
  '',
  chalk.italic('Best Regards and Have a nice day! ^^'),
  chalk.italic('Titus Nguyen'),
].join('\n');

module.exports = box;
