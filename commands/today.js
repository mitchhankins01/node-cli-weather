const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await getWeather(location);
    spinner.stop();
    console.log(`Weather conditions in ${location}:`);
    console.log(`${weather.condition.temp}° ${weather.condition.text}`);
  } catch (error) {
    spinner.stop();
    console.log(error);
  }
};
