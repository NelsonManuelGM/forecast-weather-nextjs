/**
 * It takes the data from the API and maps it to the data that the weather widget expects
 * @returns An object with the following properties:
 *   temp: temp || 0,
 *   wind: wspd || 0,
 *   humidity: humidity || 0,
 *   rain: pop || precip || 0,
 */
export default function dataMapper({ payload, place, localRequest = false }) {
  const compoundData = {
    weatherData: { temp: 0, wind: 0, humidity: 0, rain: 0 },
    weatherForecast: [],
  };

  if (place) {
    if (localRequest) {
      console.log(payload);
      // *just for local development
      const { humidity, temp, wspd, pop, conditions } = payload.weatherData;
      compoundData.weatherData.humidity = humidity || 0;
      compoundData.weatherData.temp = Number(temp).toFixed(0) || 0;
      compoundData.weatherData.wind = wspd || 0;
      compoundData.weatherData.rain = pop || 0;
      compoundData.weatherData.conditions = conditions;
      compoundData.weatherForecast = payload.weatherForecast;
    } else {
      const { locations } = payload;
      if (!locations || !Object.keys(locations).includes(place)) {
        console.error("incorrect place!");
        return data;
      }
      const location = locations[place];
      const { values } = location;
      const { humidity, temp, wspd, pop, conditions } = values[0];

      compoundData.weatherData.humidity = humidity || 0;
      compoundData.weatherData.temp = Number(temp).toFixed(0) || 0;
      compoundData.weatherData.wind = wspd || 0;
      compoundData.weatherData.rain = pop || 0;
      compoundData.weatherData.conditions = conditions;
      compoundData.weatherForecast = values.slice(1);
    }
  }

  return compoundData;
}
