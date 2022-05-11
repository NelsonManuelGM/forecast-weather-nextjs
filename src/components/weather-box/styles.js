import styled, { css } from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.platinum};
  margin: 0px;
  font-size: x-large;
  font-weight: 500;
`;

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.palette.blue_jeans};
  width: 100%;
  height: 100%;
  border-radius: 42px;
  padding: 30px 20px;

  @media (max-width: ${(props) => props.theme.breakPoint}) {
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

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
  justify-content: space-between;
`;

export const IconName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Section = styled.section`
  margin-top: 50px;
  height: 100%;
  
  ${(props) =>
    props.shrink
      ? css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `
      : null}
`;

export const Temperature = styled.h1`
  margin: 0px;
  font-size: 10rem;
  font-weight: 700;

  ${(props) =>
    props.shrink
      ? css`
          font-size: 6rem;
        `
      : null}
`;

export const TemperatureDegree = styled.div`
  color: ${(props) => props.theme.palette.platinum};
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    margin-top: 30px;
    font-size: 3rem;
    font-weight: 100;
    ${(props) =>
      props.shrink
        ? css`
            margin-top: 15px;
            font-size: 2rem;
          `
        : null}
  }
`;
