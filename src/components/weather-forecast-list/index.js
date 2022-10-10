import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Air, DeviceThermostat } from "@mui/icons-material";
import { format } from "date-fns";
import { humidityHandler } from "../icon-handler/icon-handler";
import { RainIco } from "../icons";

import { Wrapper, Card } from "./styles";

const WeatherForecastList = ({ itemList }) => {
  const themeContext = useTheme();

  return (
    <Wrapper>
      {itemList.map(
        ({ datetimeStr, maxt, humidity, wspd, pop, precip }, index) => {
          return (
            <Card key={index}>
              <p className="text-v3-gray day">
                {format(new Date(datetimeStr), "PP")}
              </p>

              <div className="info-spot">
                <DeviceThermostat htmlColor={themeContext.palette.platinum} />
                <p className="text-v3-gray">{maxt}&#176;</p>{" "}
              </div>
              <div className="info-spot">
                <Air htmlColor={themeContext.palette.platinum} />
                <p className="text-v3-gray">{wspd} mph</p>
              </div>
              <div className="info-spot">
                {humidityHandler(humidity, themeContext)}
                <p className="text-v3-gray">{humidity}%</p>
              </div>
              <div className="info-spot">
                <RainIco fill={themeContext.palette.platinum} />
                <p className="text-v3-gray">{precip || pop}%</p>
              </div>
            </Card>
          );
        }
      )}
    </Wrapper>
  );
};

export default WeatherForecastList;