/**
 * It takes the data from the API and maps it to the data that the weather widget expects
 * @returns An object with the following properties:
 *   temp: temp || 0,
 *   wind: wspd || 0,
 *   humidity: humidity || 0,
 *   rain: pop || precip || 0,
 */
export default function dataMapper({ payload, place }) {
  const compoundData = {
    weatherData: { temp: 0, wind: 0, humidity: 0, rain: 0 },
    forecastData: {},
  };

  if (place) {
    const { locations } = payload;
    if (!locations || !Object.keys(locations).includes(place)) {
      console.error("incorrect place!");
      return data;
    }
    const location = locations[place];
    const {
      currentConditions: { humidity, temp, wspd, precip, pop },
      values,
    } = location;
    compoundData.weatherData.humidity = humidity || 0;
    compoundData.weatherData.temp = Number(temp).toFixed(0) || 0;
    compoundData.weatherData.wind = wspd || 0;
    compoundData.weatherData.rain = pop || precip || 0;
    compoundData.forecastData = values;
  }

  return compoundData;
}
