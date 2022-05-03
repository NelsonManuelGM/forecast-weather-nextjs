import { useTheme } from "styled-components";

import { Wrapper, Header, Title, DensityIco, MoreIco } from "./styles";

const WeatherBox = ({ place }) => {

  const themeContext = useTheme()

  return (
    <Wrapper>
      <Header>
        <DensityIco fill={themeContext.palette.platinum} />
        <Title>{place}</Title>
        <MoreIco fill={themeContext.palette.platinum}/>
      </Header>
    </Wrapper>
  );
};

export default WeatherBox;
