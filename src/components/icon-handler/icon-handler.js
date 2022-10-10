import { Air, DeviceThermostat } from "@mui/icons-material";
import styled from "@emotion/styled";

import {
  MediumHumidityIco,
  HightHumidityIco,
  LowHumidityIco,
  RainIco,
} from "../icons";

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .info-value {
    margin: 0px;
    margin-top: 5px;
    font-size: small;
    color: ${(props) => props.theme.palette.platinum};
  }

  .info-type {
    margin: 0px;
    margin-top: 2px;
    font-size: small;
    color: ${(props) => props.theme.palette.platinum + "80"};
  }
`;

export const humidityHandler = (value, themeContext) => {
  if (value >= 75)
    return <HightHumidityIco fill={themeContext.palette.platinum} />;
  if (value >= 35 && value < 75)
    return <MediumHumidityIco fill={themeContext.palette.platinum} />;
  return <LowHumidityIco fill={themeContext.palette.platinum} />;
};

const iconHandler = (type, value, themeContext, hideType = false) => {
  switch (type) {
    case "wind":
      return (
        <Info>
          <Air htmlColor={themeContext.palette.platinum} />
          <p className="info-value">{`${value} mph`}</p>
          {hideType ? null : <p className="info-type">Wind</p>}
        </Info>
      );
    case "humidity":
      return (
        <Info>
          {humidityHandler(value, themeContext)}
          <p className="info-value">{`${value}%`}</p>
          {hideType ? null : <p className="info-type">Humidity</p>}
        </Info>
      );
    case "temperature":
      return (
        <Info>
          <DeviceThermostat htmlColor={themeContext.palette.platinum} />
          <p className="info-value">{`${value}`}&#176;</p>
          {hideType ? null : <p className="info-type">Temperature</p>}
        </Info>
      );
    default:
      return (
        <Info>
          <RainIco fill={themeContext.palette.platinum} />
          <p className="info-value">{`${value}%`}</p>
          {hideType ? null : <p className="info-type">Rain chance</p>}
        </Info>
      );
  }
};

export default iconHandler;
