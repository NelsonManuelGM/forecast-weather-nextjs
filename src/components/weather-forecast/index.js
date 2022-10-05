import { useTheme } from "@emotion/react";
import { ChevronRight, UnfoldLess, UnfoldMore } from "@mui/icons-material";

import { useAppState } from "../../context";
import { Wrapper } from "./styles";

const WeatherForecast = ({ isShrinkWeatherBox }) => {
  const themeContext = useTheme();
  const { state, dispatch } = useAppState();

  return (
    <Wrapper>
      <header
        onClick={() =>
          dispatch({
            type: "SHRINK_WEATHER_BOX",
            payload: !isShrinkWeatherBox,
          })
        }
      >
        <p>7 days</p>
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
    </Wrapper>
  );
};

export default WeatherForecast;
