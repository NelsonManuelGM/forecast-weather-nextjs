import { useTheme } from "@emotion/react";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { useEffect, useRef } from "react";

import ForecastBox from "../weather-forecast-box";
import { ForecastItems, Wrapper } from "./styles";

const Carousel = ({ itemList }) => {
  const themeContext = useTheme();
  const carouselRef = useRef(null);

  let containerWidth = 0;
  let itemsWidth = 0;

  useEffect(() => {
    if (carouselRef.current) {
      containerWidth = +carouselRef.current.clientWidth;
      itemsWidth =
        +carouselRef.current.getElementsByTagName("li")[0].clientWidth;
    }
  }, [carouselRef.current]);

  const onMove = (direction) => {
    if (itemList.length > 0) {
      let spacePosition = 0;
      let marginLeft = +carouselRef.current.style.marginLeft.split("px")[0];

      if (direction === "left") {
        spacePosition = marginLeft + itemsWidth;

        if (spacePosition <= 0)
          carouselRef.current.style.marginLeft = `${spacePosition}px`;

        return;
      }

      if (direction === "right") {
        spacePosition = marginLeft - itemsWidth;
        console.log(spacePosition);

        if (containerWidth - Math.abs(marginLeft) >= itemsWidth * 4)
          carouselRef.current.style.marginLeft = `${spacePosition}px`;

        return;
      }
    }
  };

  return (
    <Wrapper>
      <ArrowCircleLeft
        className="button button-left"
        htmlColor={themeContext.palette.platinum + "80"}
        onClick={() => onMove("left")}
      />
      <ForecastItems ref={carouselRef}>
        {itemList.map(
          ({ datetimeStr, maxt, humidity, wspd, pop, precip }, index) => {
            return (
              <ForecastBox
                key={index}
                temp={maxt}
                day={datetimeStr}
                wind={wspd}
                humidity={humidity}
                rain={pop || precip}
              />
            );
          }
        )}
      </ForecastItems>
      <ArrowCircleRight
        className="button button-right"
        htmlColor={themeContext.palette.platinum + "80"}
        onClick={() => onMove("right")}
      />
    </Wrapper>
  );
};

export default Carousel;
