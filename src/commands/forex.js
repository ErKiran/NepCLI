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
      await getTheConvertedData(answers)
    }
    catch (err) {
      throw new Error(`Can't exchange the currency ${err}`)
    }
  })