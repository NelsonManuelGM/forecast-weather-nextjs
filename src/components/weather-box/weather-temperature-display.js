import { Section, Temperature, TemperatureDegree } from "./styles";
import { SunnyIco } from "../icons";

export default function WeatherTemperature({ shrink }) {
  return (
      <Section shrink={shrink}>
        <SunnyIco
          height={shrink ? "20mm" : null}
          width={shrink ? "20mm" : null}
        />
        <TemperatureDegree shrink={shrink}>
          <Temperature className="degree-number" shrink={shrink}>
            12
          </Temperature>
          <p>&#176;</p>
        </TemperatureDegree>
      </Section>
  );
}
