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
  SunnyIco,
} from "../icons";

const WeatherBox = ({ place }) => {
  const themeContext = useTheme();

  return (
    <Wrapper>
      <Header>
        <DensityIco fill={themeContext.palette.platinum} />
        <TitleWrapper>
          <IconName>
            <PersonPinCircleIco fill={themeContext.palette.platinum} />
            <Title>{place}</Title>
          </IconName>
          <Loading>
            <DotIco fill={"green"} />
            Updating
          </Loading>
        </TitleWrapper>
        <MoreIco fill={themeContext.palette.platinum} />
      </Header>

      <Section>
        <SunnyIco />
        
      </Section>
    </Wrapper>
  );
};

export default WeatherBox;
