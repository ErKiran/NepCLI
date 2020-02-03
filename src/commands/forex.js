const program = require('commander')
const chalk = require('chalk')

const { convertTheCurrency, getTheConvertedData } = require('../controllers/forex');
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

program
  .alias('frx')
  .description(`${chalk.blueBright('List all the Exchange Rate of for the Day')}`)
  .action(async function forex() {
    try {
      const allCurrency = await convertTheCurrency();
      console.table(allCurrency)
    }
    catch (err) {
      throw new Error(`Can't list all the forex ${err}`)
    }
  })
