import { useState } from "react";
import { useTheme } from "styled-components";

import {
  Wrapper,
  Header,
  Title,
  IconName,
  TitleWrapper,
  Loading,
  Section,
} from "./styles";
import {
  DensityIco,
  MoreIco,
  PersonPinCircleIco,
  DotIco,
  ArrowBackIco,
} from "../icons";
import { useAppState } from "../../context";
import WeatherTemperature from "./weather-temperature-display";
import { WeatherInfo } from "./weather-info";

const WeatherBox = ({ place }) => {
  const themeContext = useTheme();
  const { state, dispatch } = useAppState();

  const { isShrinkWeatherBox = false } = state;

  const [temperature, setTemperature] = useState(24);
  const [type, setType] = useState('Cloudy - Rainy');
  const [date, setDate] = useState('Monday, December 30th')

  return (
    <Wrapper shrink={isShrinkWeatherBox}>
      <Header>
        <span
          onClick={() =>
            dispatch({
              type: "SHRINK_WEATHER_BOX",
              payload: !isShrinkWeatherBox,
            })
          }
        >
          {isShrinkWeatherBox ? (
            <ArrowBackIco fill={themeContext.palette.platinum} className={'cl-pointer'}/>
          ) : (
            <DensityIco fill={themeContext.palette.platinum} className={'cl-pointer'}/>
          )}
        </span>
        <TitleWrapper>
          <IconName>
            <PersonPinCircleIco fill={themeContext.palette.platinum} />
            <Title>{place}</Title>
          </IconName>
          {!isShrinkWeatherBox ? (
            <Loading>
              <DotIco fill={"green"} />
              Updating
            </Loading>
          ) : null}
        </TitleWrapper>
        <MoreIco fill={themeContext.palette.platinum} className={'cl-pointer'}/>
      </Header>

      <WeatherTemperature
        shrink={isShrinkWeatherBox}
        temperature={temperature}
        type={type}
        date={date}
      />

      <WeatherInfo />
    </Wrapper>
  );
};

export default WeatherBox;
