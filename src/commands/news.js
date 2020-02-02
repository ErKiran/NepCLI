const program = require('commander');
const chalk = require('chalk');
const { getBreakingNews, getTrendingNews, getNewsByProvience, getNewsByCategories } = require('../controllers/news')
const { formatTheNews } = require('../utils/newsFormatter')
const { categoryPicker } = require('../utils/promtHelper')

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
  .action(async function provienceNews(pid) {
    try {
      if (pid > 7) {
        console.log(chalk.redBright(`👊👊 Nepal only have 7 provience and you want news of Provience No ${pid} 🤣🤣`))
        return
      }
      const news = await getNewsByProvience(parseInt(pid))
      formatTheNews(`News of Provience ${pid}`, news)
    }
    catch (err) {
      throw new Error(`Can't get News ${err}`)
    }
  })

program
  .command('category')
  .alias('cat')
  .description(`${chalk.yellowBright(`Get the News according to the Categories Choosen`)}`)
  .action(async function categoriesNews() {
    try {
      const category = await categoryPicker();
      const news = await getNewsByCategories(category.theme);
      formatTheNews(`News of categories ${category.theme}`, news)
    }
    catch (err) {
      throw new Error(`Can't get News By Categories ${err}`)
    }
  })