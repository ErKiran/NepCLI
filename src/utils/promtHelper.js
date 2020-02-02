const inquirer = require('inquirer');
const chalk = require('chalk')

const { getHoroscope } = require('../controllers/horoscope')
const { getAllCurrency } = require('../controllers/forex')
async function horoscopePicker() {
  try {
    const horoscopes = await getHoroscope()
    delete horoscopes.id;
    const horoscopePicker = inquirer.prompt([
      {
        type: 'list',
        name: 'horoscope',
        message: `${chalk.red('What is your sign?')}`,
        choices: [...Object.keys(horoscopes)]
      }
    ]).then(answers => {
      return answers
    })
    return horoscopePicker
  }
  catch (err) {
    throw new Error(`Can't map horoscopes to CLI ${err}`)
  }
}

function categoryPicker() {
  try {
    const categoryPicker = inquirer
      .prompt([
        {
          type: 'list',
          name: 'theme',
          message: 'Which Category of News Do you want to get?',
          choices: [
            'health',
            'tech',
            'interesting-world',
            'foreign',
            'prabas',
          ]
        }
      ])
      .then(answers => {
        return answers
      });
    return categoryPicker
  }
  catch (err) {
    throw new Error(`Can't pick Category ${err}`)
  }
}

async function exchangePicker() {
  try {
    const currencies = await getAllCurrency()
    const exchangePrompt = inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: `${chalk.yellowBright('What are you looking for?')}`,
        choices: [
          'Buy Money',
          'Sell Money',
          'Check the Exchange Rage'
        ]
      },
      {
        type: 'list',
        name: 'from',
        message: `${chalk.redBright('Which Currency do you have?')}`,
        choices: [...currencies]
      },
      {
        type: 'list',
        name: 'to',
        message: `${chalk.greenBright('In Which currency do you want to convert it to ?')}`,
        choices: [...currencies]
      }
    ]).then(answers => {
      return answers
    })
    return exchangePrompt
  }
  catch (err) {
    throw new Error(`Can't create Prompt for Exchange Rate ${err}`)
  }
}

module.exports = {
  categoryPicker,
  horoscopePicker,
  exchangePicker
}