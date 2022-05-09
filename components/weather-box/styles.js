import styled from "styled-components";

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
  padding: 20px 20px;

  @media (max-width: ${(props) => props.theme.breakPoint}) {
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
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
