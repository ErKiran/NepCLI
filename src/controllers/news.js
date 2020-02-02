const axios = require('axios');
const { BASE_URL } = process.env

async function getBreakingNews() {
  try {
    const specialNews = await axios.get(`http://bg.annapurnapost.com/api/breaking/news?specialBreakingNews=1`);
    const news = [];
    await Promise.all(specialNews.data.data.map(i => {
      news.push({
        title: i.title,
        link: `http://annapurnapost.com/news/${i.id}`
      })
    }))
    const todaysDate = specialNews.data.todaysDate;
    return {
      news,
      todaysDate
    }
  }
  catch (err) {
    throw new Error(`Can't fetch Latest Breaking news ${err}`)
  }
}


module.exports = {
  getBreakingNews
}