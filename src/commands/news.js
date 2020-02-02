const program = require('commander');
const chalk = require('chalk');
const { getBreakingNews, getTrendingNews } = require('../controllers/news')

program
  .command('breakingNews')
  .alias('brk')
  .description(`${chalk.red('🔥🔥 Breaking News 🔥🔥')}`)
  .action(async function BreakingNews() {
    try {
      const news = await getBreakingNews();
      console.log(chalk.yellowBright(`The Breaking News for ${new Date()} are`))
      console.log('')
      news.map(i => {
        console.log(chalk.redBright(`🔥🔥 ${i.title}`))
        console.log(chalk.magentaBright(`Read More👉👉 ${i.link}`))
        console.log('')
      })
      process.exit(1)
    }
    catch (err) {
      throw new Error(`Can't process breakingNews Command ${err}`)
    }
  })

program
  .command('trendingNews')
  .alias('trd')
  .description(`${chalk.green('❤️❤️ Popular News ❤️❤️')}`)
  .action(async function popularNews() {
    try {
      const news = await getTrendingNews()
    }
    catch (err) {
      throw new Error(`Can't process TrendingNews Command ${err}`)
    }

  })
