import { useCallback } from "react";
import { useTheme } from "@emotion/react";
import { Air } from "@mui/icons-material";
import { InfoWrapper, Info } from "./styles";
import {
  MediumHumidityIco,
  HightHumidityIco,
  LowHumidityIco,
  RainIco,
} from "../icons";

export function WeatherInfo({ wind, humidity, rain }) {
  const themeContext = useTheme();

  const humidityHandler = useCallback((value) => {
    if (value >= 75)
      return <HightHumidityIco fill={themeContext.palette.platinum} />;
    if (value >= 35 && value < 75)
      return <MediumHumidityIco fill={themeContext.palette.platinum} />;
    return <LowHumidityIco fill={themeContext.palette.platinum} />;
  }, []);

  const info = (type) => {
    switch (type) {
      case "wind":
        return (
          <Info>
            <Air htmlColor={themeContext.palette.platinum} />
            <p className="info-value">{`${wind} mph`}</p>
            <p className="info-type">Wind</p>
          </Info>
        );
      case "humidity":
        return (
          <Info>
            {humidityHandler(humidity)}
            <p className="info-value">{`${humidity}%`}</p>
            <p className="info-type">Humidity</p>
          </Info>
        );
      default:
        return (
          <Info>
            <RainIco fill={themeContext.palette.platinum} />
            <p className="info-value">{`${rain}%`}</p>
            <p className="info-type">Rain chance</p>
          </Info>
        );
    }
  };

  return (
    <InfoWrapper>
      <>{info("wind", wind)}</>
      <>{info("humidity", humidity)}</>
      <>{info("", rain)}</>
    </InfoWrapper>
  );
}
