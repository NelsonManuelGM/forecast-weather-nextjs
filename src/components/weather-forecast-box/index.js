import { useTheme } from "@emotion/react";
import { format } from "date-fns";
import iconHandler from "../icon-handler/icon-handler";

import { Wrapper } from "./styles";

const ForecastBox = ({
  temp = 0,
  day = "",
  wind = 0,
  humidity = 0,
  rain = 0,
}) => {
  const themeContext = useTheme();

  return (
    <Wrapper>
      <span>
        <p className="text-v3-gray">{format(new Date(day), "cccc")}</p>
      </span>
      {/* <>{iconHandler("wind", wind, themeContext, true)}</> */}
      {/* <>{iconHandler("humidity", humidity, themeContext, true)}</> */}
      <>{iconHandler("", rain, themeContext, true)}</>
      <>{iconHandler("temperature", temp, themeContext, true)}</>
    </Wrapper>
  );
};

export default ForecastBox;
