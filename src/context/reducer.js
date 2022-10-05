export const initialState = {
  isShrinkWeatherBox: false,
  fetchingData: false,
  gps: {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
  },
  gpsAccuracyThreshold: 30,
  positionAccuracyThreshold: 20,
  weatherData: {},
  weatherForecast: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SHRINK_WEATHER_BOX":
      return { ...state, isShrinkWeatherBox: action.payload };
    case "FETCHING_DATA":
      return { ...state, fetchingData: action.payload };
    case "SET_DATA":
      return { ...state, weatherData: action.payload };
    case "UPDATE_GPS_POSITION":
      return { ...state, ...{ gps: action.payload } };
    case "UPDATE_WEATHER_FORECAST":
      return { ...state, ...{ weatherForecast: action.payload } };
    default:
      return state;
  }
}
