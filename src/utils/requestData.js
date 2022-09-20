let URL = "https://visual-crossing-weather.p.rapidapi.com/forecast?";

export async function fetchWeatherForecast({ place }) {
  let headers = new Headers();
  headers.set(
    "X-RapidAPI-Key",
    `270430aaffmshc8bbbb08a1f4aa2p1b5c41jsn17601df4595e`
  );
  headers.set("X-RapidAPI-Host", `visual-crossing-weather.p.rapidapi.com`);

  const params = {
    aggregateHours: "24",
    location: place,
    contentType: "json",
    unitGroup: "us",
    shortColumnNames: "0",
  };
  try {
    const response = await fetch(URL + new URLSearchParams(params).toString(), {
      method: "GET",
      headers: headers,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
