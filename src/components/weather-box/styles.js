import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.platinum};
  margin: 0 0 0 5px;
  font-size: x-large;
  font-weight: 500;
`;

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.palette.blue_jeans};
  background-image: linear-gradient(
    ${(props) => props.theme.palette.blue_jeans},
    ${(props) => props.theme.palette.azure}
  );
  width: 100%;
  height: 100%;
  max-height: 650px;
  border-radius: 42px;
  padding: 30px 20px;

  @media (max-width: ${(props) => props.theme.breakPoint}) {
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .cl-pointer {
    &:hover {
      cursor: pointer;
      fill: ${(props) => props.theme.palette.rich_black_fogra_29};
    }
  }

  ${(props) =>
    props.shrink
      ? css`
          height: 400px;
          transition: height 0.3s;
        `
      : css`
          height: 100%;
          transition: height 0.1s;
        `}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    height: 24px;
  }
`;

export const IconName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 190px;
`;

export const Loading = styled.div`
  margin-top: 10px;
  padding: 2px 12px 2px 4px;
  border: 1px solid ${(props) => props.theme.palette.platinum};
  border-radius: 50px;
  font-size: x-small;
  color: ${(props) => props.theme.palette.platinum};

  display: flex;
  flex-direction: row;
  align-items: center;
`;

// weather temperature display styles
export const Article = styled.article`
  margin-top: 10px;
  height: 100%;

  ${(props) =>
    props.shrink
      ? css`
          width: 80%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        `
      : null}
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  /* height: 150px; */
  .degree-number {
    margin: 0px;
    font-size: 8rem;
    font-weight: 700;

    ${(props) =>
      props.shrink
        ? css`
            font-size: 6rem;
          `
        : null}
  }
  .degree-sign {
    margin: 0px;
    margin-top: 18px;
    font-size: 3rem;
    font-weight: 100;

    ${(props) =>
      props.shrink
        ? css`
            margin-top: 14px;
            font-size: 2rem;
          `
        : null}
  }

  /* ${(props) =>
    props.shrink
      ? css`
          font-size: 8rem;
        `
      : null} */
`;

export const TemperatureDegree = styled.div`
  color: ${(props) => props.theme.palette.platinum};
  display: flex;
  flex-direction: column;
  align-items: center;

  .weather-title {
    margin: 0px;
    font-size: x-large;
  }
`;

// weather info styles

export const InfoWrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.palette.platinum + "20"};
  height: 150px;
  width: 100%;
  padding: 20px 40px 0 40px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.platinum};
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75px;

  .info-value {
    margin: 0px;
    margin-top: 5px;
    font-size: small;
    color: ${(props) => props.theme.palette.platinum};
  }

  .info-type {
    margin: 0px;
    margin-top: 2px;
    font-size: small;
    color: ${(props) => props.theme.palette.platinum + "80"};
  }
`;
