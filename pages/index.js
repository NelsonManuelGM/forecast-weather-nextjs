import { useState } from "react";

import { WeatherBox, WeatherBroadcast } from "../components";

export default function Home() {
  const [place, setPlace] = useState("Miami");

  return (
    <>
      <WeatherBox place={place} />
      <WeatherBroadcast />
    </>
  );
}
