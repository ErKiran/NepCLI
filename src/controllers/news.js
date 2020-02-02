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

async function getNewsByProvience(pid) {
  try {
    return createNewsData(`http://bg.annapurnapost.com/api/province/news?province=${pid}`)
  }
  catch (err) {
    throw new Error(`Can't get News of Provience ${pid} ${err}`)
  }
}

async function getNewsByCategories(type) {
  try {
    return createNewsData(`http://bg.annapurnapost.com/api/news/list?page=1&category_alias=${type}`)
  }
  catch (err) {
    throw new Error(`Can't get News By Categories ${err}`)
  }
}

module.exports = {
  getBreakingNews,
  getTrendingNews,
  getNewsByProvience,
  getNewsByCategories
}