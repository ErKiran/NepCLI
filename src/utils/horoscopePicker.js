const inquirer = require('inquirer');
const { getHoroscope } = require('../controllers/horoscope')
async function horoscopePicker() {
  try {
    const horoscopes = await getHoroscope()
    delete horoscopes.id;
    const horoscopePicker = inquirer.prompt([
      {
        type: 'list',
        name: 'horoscope',
        message: 'What is your sign?',
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

module.exports = {
  horoscopePicker
}