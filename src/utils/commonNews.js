const axios = require('axios');
const LINK_URL = 'http://annapurnapost.com/news/'

async function createNewsData(url) {
  try {
    const apNews = await axios.get(url);
    const news = [];
    await Promise.all(apNews.data.data.map(i => {
      news.push({
        title: i.title,
        link: `${LINK_URL}${i.id}`,
        author: i.author.name
      })
    }))
    return news
  }
  catch (err) {
    throw new Error(`Can't create News Data ${err}`)
  }
}

module.exports = {
  createNewsData
}