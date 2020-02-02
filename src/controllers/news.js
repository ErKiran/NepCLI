const axios = require('axios');
const LINK_URL = 'http://annapurnapost.com/news/'
const { BASE_URL } = process.env

async function getBreakingNews() {
  try {
    const specialNews = await axios.get(`http://bg.annapurnapost.com/api/breaking/news?specialBreakingNews=1`);
    const news = [];
    await Promise.all(specialNews.data.data.map(i => {
      news.push({
        title: i.title,
        link: `${LINK_URL}${i.id}`,
        author: i.author.name
      })
    }))
    return news
  }
  catch (err) {
    throw new Error(`Can't fetch Latest Breaking news ${err}`)
  }
}

async function getTrendingNews() {
  try {
    const trendingNews = await axios.get(`http://bg.annapurnapost.com/api/trending/news`);
    const trends = [];
    await Promise.all(trendingNews.data.data.map(i => {
      trends.push({
        title: i.title,
        link: `${LINK_URL}${i.id}`,
        author: i.author.name
      })
    }))
    return trends
  }
  catch (err) {
    throw new Error(`Can't fetch Trending News ${err}`)
  }
}

module.exports = {
  getBreakingNews,
  getTrendingNews
}