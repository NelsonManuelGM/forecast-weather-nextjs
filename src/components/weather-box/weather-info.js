import { useTheme } from "styled-components";

import { InfoWrapper, Info } from "./styles";
import { WindIco } from "../icons";

export function WeatherInfo() {
  const themeContext = useTheme();

  const info = () => {
    return (
      <Info>
        <WindIco fill={themeContext.palette.platinum} />
        <d>asd</d>
        asd
      </Info>
    );
  };

  return (
    <InfoWrapper>
      <>{info()}</>
      <>{info()}</>
      <>{info()}</>
    </InfoWrapper>
  );
}
