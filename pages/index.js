import { useEffect, useState } from "react";

import { WeatherBox, WeatherBroadcast } from "../src/components";
import { useAppState } from "../src/context";
import dataMapper from "../src/utils/data-mapper";
import useDebounce from "../src/utils/debounce";
import { fetchWeatherForecast } from "../src/utils/requestData";

export default function Home() {
  const { state, dispatch } = useAppState();
  const [place, setPlace] = useState("");

  const { isShrinkWeatherBox = false } = state;

  const debouncedValue = useDebounce(place, 1000);

  useEffect(() => {
    async function fetchData() {
      let data = {};

      // TODO reuse when the moth limit is expired
      data = dataMapper({ payload: await fetchWeatherForecast({ place }), place });

      // TODO temporary API
      // try {
      //   const response = await fetch("http://localhost:3000/api/hello");
      //   data = dataMapper(await response.json());
      // } catch (error) {
      //   console.error(error);
      // }

      dispatch({ type: "SET_DATA", payload: data });
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
      {/* <WeatherBroadcast /> */}
    </>
  );
}
