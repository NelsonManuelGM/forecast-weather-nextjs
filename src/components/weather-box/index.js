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

const WeatherBox = ({ place }) => {
  const themeContext = useTheme();
  const { state, dispatch } = useAppState();

  const { isShrinkWeatherBox = false } = state;

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
            <ArrowBackIco fill={themeContext.palette.platinum} />
          ) : (
            <DensityIco fill={themeContext.palette.platinum} />
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
        <MoreIco fill={themeContext.palette.platinum} />
      </Header>

      <WeatherTemperature shrink={isShrinkWeatherBox} />
    </Wrapper>
  );
};

export default WeatherBox;
