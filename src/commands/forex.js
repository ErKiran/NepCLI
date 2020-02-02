const program = require('commander')
const chalk = require('chalk')

const { getTheConvertedData } = require('../controllers/forex');
const { exchangePicker } = require('../utils/promtHelper')

program
  .command('exchange')
  .alias('exc')
  .description(`${chalk.redBright('Convert the Money to the Desired Currency')}`)
  .action(async function exachangeCurrency() {
    try {
      const answers = await exchangePicker()
      const convertedMoney = await getTheConvertedData(answers)
      console.log(chalk.bold(`${chalk.greenBright(answers.units)} ${chalk.redBright(answers.from)} = NRP ${convertedMoney}`))
    }
    catch (err) {
      throw new Error(`Can't exchange the currency ${err}`)
    }
  })