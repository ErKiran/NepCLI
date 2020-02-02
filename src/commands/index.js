const program = require('commander');
const chalk = require('chalk');
require('./news')
require('./horoscope')
require('./forex')

program
  .version('0.0.1')
  .description(`${chalk.red(`
❤️❤️ Nepal Today ❤️❤️

`)} 
${chalk.green('All in One CLI TOOL')}
${chalk.blue('Our Services')}
${chalk.black('_________________________________________________________________________')}
* ${chalk.yellow('News')}
* ${chalk.yellowBright('Horscope')}
* ${chalk.redBright('Foreign Exchange')}
`)

program.parse(process.argv)  