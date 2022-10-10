import { Article, Temperature, TemperatureDegree } from "./styles";
import { SunnyIco } from "../icons";

export default function WeatherTemperature({
  shrink,
  temperature,
  type,
  date,
}) {
  return (
    <Article shrink={shrink}>
      <SunnyIco
        height={shrink ? "35mm" : null}
        width={shrink ? "35mm" : null}
      />
      <TemperatureDegree shrink={shrink}>
        {shrink ? <>{date}</> : null}
        <Temperature shrink={shrink}>
          <p className="degree-number">{temperature}</p>
          <p className="degree-sign">&#176;</p>
        </Temperature>
        {shrink ? <></> : <p className="weather-title">{type}</p>}
        <p className="text-v3-gray">{shrink ? type : date}</p>
      </TemperatureDegree>
    </Article>
  );
}
