const program = require('commander')
const chalk = require('chalk')

const { getAllCurrency } = require('../controllers/forex')

program
  .command('exchange')
  .alias('exc')
  .description(`${chalk.redBright('Convert the Money to the Desired Currency')}`)
  .action(async function exachangeCurrency() {
    try {
      const test = await getAllCurrency()
    }
    catch (err) {
      throw new Error(`Can't exchange the currency ${err}`)
    }
  })