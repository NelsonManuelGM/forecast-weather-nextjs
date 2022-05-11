export const initialState = {
  isShrinkWeatherBox: false,
  fetchingData: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SHRINK_WEATHER_BOX":
      return { ...state, isShrinkWeatherBox: action.payload };
    case "FETCHING_DATA":
      return { ...state, fetchingData: action.payload };
    default:
      return state;
  }
}
