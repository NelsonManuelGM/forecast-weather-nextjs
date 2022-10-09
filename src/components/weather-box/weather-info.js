import { useCallback } from "react";
import { useTheme } from "@emotion/react";
import { Air } from "@mui/icons-material";
import { InfoWrapper, Info } from "./styles";

import iconHandler from "../icon-handler/icon-handler";

export function WeatherInfo({ wind, humidity, rain }) {
  const themeContext = useTheme();

  return (
    <InfoWrapper>
      <>{iconHandler("wind", wind, themeContext)}</>
      <>{iconHandler("humidity", humidity, themeContext)}</>
      <>{iconHandler("", rain, themeContext)}</>
    </InfoWrapper>
  );
}
