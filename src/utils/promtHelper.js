const inquirer = require('inquirer');

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

module.exports = {
  categoryPicker
}