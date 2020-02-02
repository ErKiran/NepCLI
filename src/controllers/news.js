const { createNewsData } = require('../utils/commonNews');

async function getBreakingNews() {
  try {
    return createNewsData('http://bg.annapurnapost.com/api/breaking/news?specialBreakingNews=1')
  }
  catch (err) {
    throw new Error(`Can't fetch Latest Breaking news ${err}`)
  }
}

async function getTrendingNews() {
  try {
    return createNewsData('http://bg.annapurnapost.com/api/trending/news')
  }
  catch (err) {
    throw new Error(`Can't fetch Trending News ${err}`)
  }
}

module.exports = {
  getBreakingNews,
  getTrendingNews
}