import { format } from "date-fns";

import { Wrapper } from "./styles";

const ForecastBox = ({ temp = 0, icon = "ICO", day = "" }) => {
  return (
    <Wrapper>
      <span><p className="text-v3-gray">{format(new Date(day), "cccc")}</p></span>
      <span>{icon}</span>
      <span>{temp}&#176;</span>
    </Wrapper>
  );
};

export default ForecastBox;
