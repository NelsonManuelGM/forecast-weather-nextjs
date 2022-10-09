import { useState } from "react";
import { useTheme } from "@emotion/react";
import { TextField, InputAdornment, Box } from "@mui/material";
import {
  MapOutlined,
  ChevronLeft,
  UnfoldLess,
  MoreVert,
} from "@mui/icons-material";
import { format } from "date-fns";

import { Wrapper, Header } from "./styles";
import { useAppState } from "../../context";
import WeatherTemperature from "./weather-temperature-display";
import { WeatherInfo } from "./weather-info";

const WeatherBox = ({ place, setPlace, isShrinkWeatherBox }) => {
  const themeContext = useTheme();
  const { state, dispatch } = useAppState();
  const {
    temp = 0,
    wind = 0,
    humidity = 0,
    rain = 0,
    datetime = Date.now(),
    icon,
  } = state.weatherData;

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
            <ChevronLeft
              className={"cl-pointer"}
              htmlColor={themeContext.palette.platinum}
            />
          ) : (
            <UnfoldLess
              className={"cl-pointer"}
              htmlColor={themeContext.palette.platinum}
            />
          )}
        </span>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="location"
            value={place}
            onChange={({ target }) => setPlace(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MapOutlined htmlColor={themeContext.palette.platinum} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <span>
          <MoreVert
            htmlColor={themeContext.palette.platinum}
            className={"cl-pointer"}
          />
        </span>
      </Header>

      <WeatherTemperature
        shrink={isShrinkWeatherBox}
        temperature={temp}
        type={icon ? String(icon).replace('-',' ').toLowerCase(): '--'}
        date={format(datetime, "PPP")}
      />

      <WeatherInfo wind={wind} humidity={humidity} rain={rain} />
    </Wrapper>
  );
};

export default WeatherBox;
