const chalk = require('chalk');
function formatTheNews(type, data) {
  try {
    console.log(chalk.redBright(`${type} for ${new Date()} are`))
    console.log('')
    data.map(i => {
      console.log(chalk.redBright(`       🔥🔥 ${i.title}`))
      console.log(`${chalk.cyanBright('       Read More 👉👉 ')}${chalk.blueBright(i.link)}`)
      console.log(`${chalk.greenBright(`         ✍️ ${i.author}`)}`)
      console.log('')
    })
    process.exit(1)
  }
  catch (err) {
    throw new Error(`Can't fromat the News ${err}`)
  }
}

module.exports = {
  formatTheNews
}