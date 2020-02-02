const program = require('commander');
const chalk = require('chalk');
const { getBreakingNews, getTrendingNews } = require('../controllers/news')
const { formatTheNews } = require('../utils/newsFormatter')

program
  .command('breakingNews')
  .alias('brk')
  .description(`${chalk.red('🔥🔥 Breaking News 🔥🔥')}`)
  .action(async function BreakingNews() {
    try {
      const news = await getBreakingNews();
      formatTheNews('Breaking News', news)
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
      formatTheNews('Popular News', news)
    }
    catch (err) {
      throw new Error(`Can't process TrendingNews Command ${err}`)
    }

  })

program
  .command('provience <pid>')
  .alias('p')
  .description(`${chalk.blue(`Get the News according to Provience
You'll need to enter the provience Number to get the News
`)}`)  
