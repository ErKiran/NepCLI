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
    return today.data.Conversion.Currency;
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
      await Promise.all(data.map(i => {
        currencies.add(i.BaseCurrency)
        currencies.add(i.TargetCurrency)
      }))
    }
    catch (err) {
      throw new Error(`Currency Array Doesn't found ${err}`)
    }
    const allCurrencies = [...currencies]
    return allCurrencies.filter(i => i !== 'NPR')
  }
  catch (err) {
    throw new Error(`Can't get All Currency`)
  }
}

async function getTheConvertedData(answers) {
  try {
    const todayPrice = await convertTheCurrency()
    const { action, from, units } = answers
    if (action === 'Buy Money') {
      return calculateBuyingPrice(todayPrice, from, units)
    }
    return calculateSellingPrice(todayPrice, from, units)
  }
  catch (err) {
    throw new Error(`Can't convert Money ${err}`)
  }
}

function calculateSellingPrice(forex, foreignCurrency, units) {
  try {
    if (Array.isArray(forex)) {
      const desiredCurrency = forex.filter(i => i.BaseCurrency === foreignCurrency)
      const unit = units / desiredCurrency[0].BaseValue
      const convertedPrice = unit * desiredCurrency[0].TargetSell;
      return convertedPrice
    }
  }
  catch (err) {
    throw new Error(`Can't calculate the Selling Price ${err}`)
  }
}

function calculateBuyingPrice(forex, foreignCurrency, units) {
  try {
    if (Array.isArray(forex)) {
      const desiredCurrency = forex.filter(i => i.BaseCurrency === foreignCurrency)
      const unit = units / desiredCurrency[0].BaseValue
      const convertedPrice = unit * desiredCurrency[0].TargetBuy;
      return convertedPrice
    }
  }
  catch (err) {
    throw new Error(`Can't calculate the Buying Price ${err}`)
  }
}


module.exports = {
  getAllCurrency,
  convertTheCurrency,
  getTheConvertedData
}