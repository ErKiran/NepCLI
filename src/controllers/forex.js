const axios = require('axios');

async function convertTheCurrency() {
  try {
    const todays = new Date();
    let day = todays.getDate();
    let months = todays.getMonth();
    day = day.toString().length === 2 ? day : `0${day}`;
    months = months.toString().length === 2 ? months : `0${months}`;
    const year = todays.getFullYear();
    const today = await axios.get(`https://www.nrb.org.np/exportForexJSON.php?YY=${year}&MM=${months}&DD=${day}&YY1=${year}&MM1=${months}&DD1=${day}`);
    return today.data
  }
  catch (err) {
    throw new Error(`Can't convert the currecy ${err}`)
  }
}

async function getAllCurrency() {
  try {
    const currencies = new Set()
    const data = await convertTheCurrency()
    try {
      const rates = data.Conversion.Currency
      await Promise.all(rates.map(i => {
        currencies.add(i.BaseCurrency)
        currencies.add(i.TargetCurrency)
      }))
    }
    catch (err) {
      throw new Error(`Currency Array Doesn't found ${err}`)
    }
    const allCurrencies = [...currencies]
    return allCurrencies
  }
  catch (err) {
    throw new Error(`Can't get All Currency`)
  }
}

module.exports = {
  getAllCurrency
}