import { useEffect, useState } from "react";

import { WeatherBox, WeatherBroadcast } from "../src/components";
import { useAppState } from "../src/context";
import {
  fetchWeatherForecast,
  authenticationFunction,
} from "../src/utils/requestData";

export default function Home() {
  const { state, dispatch } = useAppState();
  const [place, setPlace] = useState("Miami");

  // useEffect(() => {
  //   async function fetchData() {
  //     let data = {};
  //     let _token;

  //     if (state.gps.latitude && state.gps.longitude) {
  //       _token = await authenticationFunction();

  //       data = await fetchWeatherForecast({
  //         lat: state.gps.latitude,
  //         lng: state.gps.longitude,
  //         token: _token,
  //       });
  //     }
  //     dispatch({ type: "SET_DATA", payload: data });
  //   }

  //   fetchData();
  // }, [dispatch, state.gps.latitude, state.gps.longitude]);

  console.log(
    "Latitude: " +
      state.gps.latitude.toPrecision(21) +
      " Longitude: " +
      state.gps.longitude.toPrecision(21) +
      " Accuracy: " +
      state.gps.accuracy
  );

  return (
    <>
      {/* <WeatherBox place={place} />
      <WeatherBroadcast /> */}
    </>
  );
}
