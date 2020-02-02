const program = require('commander');
const chalk = require('chalk');
const { filterHoroscope } = require('../controllers/horoscope');

program
  .command('horoscope')
  .alias('luck')
  .description(chalk.red('🤞🤞 Daily Luck '))
  .action(async function horoscope() {
    try {
      const { horoscopePicker } = require('../utils/horoscopePicker')
      const choosen = await horoscopePicker()
      const luck = await filterHoroscope(choosen.horoscope)
      console.log(chalk.redBright(`Prediction for the Sign ${choosen.horoscope} are: `))
      const splitted = luck.split('।')
      splitted.map(i => {
        console.log(chalk.greenBright('*'), chalk.greenBright(chalk.italic(i)))
      })
    }
    catch (err) {
      throw new Error(`Can't get Horoscope`)
    }
  })