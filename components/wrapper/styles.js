import styled from "styled-components";

export const Canvas = styled.main`
  background-image: radial-gradient(${props=>props.theme.palette.rich_black_fogra_29} 1px, transparent 1px),
    radial-gradient(${props=>props.theme.palette.blue_jeans} 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.article`
  border-radius: 50px;
  border: black 1px solid;
  width: 400px;
  height: 90vh;
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props=>props.theme.palette.rich_black_fogra_29};

  @media (max-width: ${props=>props.theme.breakPoint}) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: 0px;
  }
`;
