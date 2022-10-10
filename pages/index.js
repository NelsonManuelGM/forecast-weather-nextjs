import { useEffect, useState } from "react";

import { WeatherBox, WeatherForecast } from "../src/components";
import { useAppState } from "../src/context";
import dataMapper from "../src/utils/data-mapper";
import useDebounce from "../src/utils/debounce";
import { fetchWeatherForecast } from "../src/utils/requestData";

export default function Home() {
  const { state, dispatch } = useAppState();
  const [place, setPlace] = useState("");

  const { isShrinkWeatherBox = false } = state;

  const debouncedValue = useDebounce(place, 1000);
  const localRequest = process.env.NEXT_PUBLIC_REQUEST_TYPE === "local";

  useEffect(() => {
    async function fetchData() {
      let data = {};
      if (localRequest) {
        // * local request
        try {
          const response = await fetch("http://localhost:3000/api/hello");
          data = dataMapper({
            payload: await response.json(),
            place,
            localRequest: true,
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        data = dataMapper({
          payload: await fetchWeatherForecast({ place }),
          place,
        });
      }
      let { weatherData = {}, weatherForecast = {} } = data;

      dispatch({ type: "SET_WETHER_DATA", payload: weatherData });
      dispatch({ type: "UPDATE_WEATHER_FORECAST", payload: weatherForecast });
    }
    if (debouncedValue) fetchData();
  }, [debouncedValue]);

  return (
    <>
      <WeatherBox
        place={place}
        setPlace={(value) => setPlace(value)}
        isShrinkWeatherBox={isShrinkWeatherBox}
      />
      <WeatherForecast isShrinkWeatherBox={isShrinkWeatherBox} />
    </>
  );
}
