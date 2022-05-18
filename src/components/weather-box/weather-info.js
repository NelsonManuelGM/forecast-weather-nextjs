import { useTheme } from "styled-components";

import { InfoWrapper, Info } from "./styles";
import {
  WindIco,
  MediumHumidityIco,
  HightHumidityIco,
  LowHumidityIco,
  RainIco,
} from "../icons";

export function WeatherInfo() {
  const themeContext = useTheme();

  const humidityHandler = (value) => {
    if (value >= 75)
      return <HightHumidityIco fill={themeContext.palette.platinum} />;
    if (value >= 35 && value < 75)
      return <MediumHumidityIco fill={themeContext.palette.platinum} />;
    return <LowHumidityIco fill={themeContext.palette.platinum} />;
  };

  const info = (type, value) => {
    switch (type) {
      case "wind":
        return (
          <Info>
            <WindIco fill={themeContext.palette.platinum} />
            <p className="info-value">{value || "13km/h"}</p>
            <p className="info-type">Wind</p>
          </Info>
        );
      case "humidity":
        return (
          <Info>
            {humidityHandler(value)}
            <p className="info-value">{value || "24%"}</p>
            <p className="info-type">Humidity</p>
          </Info>
        );
      default:
        return (
          <Info>
            <RainIco fill={themeContext.palette.platinum} />
            <p className="info-value">{value || "49%"}</p>
            <p className="info-type">Rain chance</p>
          </Info>
        );
    }
  };

  return (
    <InfoWrapper>
      <>{info("wind")}</>
      <>{info("humidity")}</>
      <>{info()}</>
    </InfoWrapper>
  );
}
