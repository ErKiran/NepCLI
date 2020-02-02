const inquirer = require('inquirer');
const chalk = require('chalk')

const { getHoroscope } = require('../controllers/horoscope')
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

module.exports = {
  categoryPicker,
  horoscopePicker
}