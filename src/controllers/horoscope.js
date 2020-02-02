const axios = require('axios')

async function getHoroscope() {
  try {
    const lucks = await axios.get('http://bg.annapurnapost.com/api/horoscope')
    return lucks.data.data
  }
  catch (err) {
    throw new Error(`Can't get the Horoscope ${err}`)
  }
}

async function filterHoroscope(horo) {
  try {
    const allHoros = await getHoroscope();
    return allHoros[horo]
  }
  catch (err) {
    throw new Error(`Can't filter the Horoscope ${err}`)
  }
}

module.exports = {
  getHoroscope,
  filterHoroscope
}