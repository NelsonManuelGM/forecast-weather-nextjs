let URL = "https://visual-crossing-weather.p.rapidapi.com/forecast?";

export async function fetchWeatherForecast({ place }) {
  let headers = new Headers();
  headers.set(
    "X-RapidAPI-Key",
    process.env.NEXT_PUBLIC_KEY
  );
  headers.set("X-RapidAPI-Host", process.env.NEXT_PUBLIC_HOST);

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
