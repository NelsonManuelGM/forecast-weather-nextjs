import { useTheme } from "@emotion/react";
import { UnfoldLess, UnfoldMore, WrongLocation } from "@mui/icons-material";

import { useAppState } from "../../context";
import { Wrapper, ForecastItems, NoInfoWarning } from "./styles";
import Carousel from "../carousel";
import WeatherForecastList from "../weather-forecast-list";

const WeatherForecast = ({ isShrinkWeatherBox }) => {
  const themeContext = useTheme();
  const { state, dispatch } = useAppState();

  return (
    <Wrapper isShrinkWeatherBox={isShrinkWeatherBox}>
      <header
        onClick={() =>
          dispatch({
            type: "SHRINK_WEATHER_BOX",
            payload: !isShrinkWeatherBox,
          })
        }
      >
        <p className="text-v3-gray">7 days</p>
        {isShrinkWeatherBox ? (
          <UnfoldLess
            className={"cl-pointer"}
            htmlColor={themeContext.palette.platinum + "80"}
          />
        ) : (
          <UnfoldMore
            className={"cl-pointer"}
            htmlColor={themeContext.palette.platinum + "80"}
          />
        )}
      </header>

      {state.weatherForecast.length > 0 ? (
        <>
          {isShrinkWeatherBox ? (
            <WeatherForecastList itemList={state.weatherForecast} />
          ) : (
            <Carousel itemList={state.weatherForecast} />
          )}
        </>
      ) : (
        <NoInfoWarning>
          <WrongLocation htmlColor={themeContext.palette.platinum + "80"} />
          <p className="text-v3-gray">
            There is not a selected place to show a broadcast for...
          </p>
        </NoInfoWarning>
      )}
    </Wrapper>
  );
};

export default WeatherForecast;
