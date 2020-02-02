const program = require('commander');
const chalk = require('chalk');
const { getBreakingNews } = require('../controllers/news')

program
  .command('breakingNews')
  .description(`${chalk.red('🔥🌋 Breaking News 🔥')}`)
  .action(async function BreakingNews() {
    const news = await getBreakingNews();
    console.log(chalk.yellowBright(`The Breaking News for ${news.todaysDate} are`))
    news.news.map(i => {
      console.log(chalk.redBright(i.title))
      console.log(chalk.magentaBright(`Read More Here ${i.link}`))
    })
    process.exit(1)
  })
