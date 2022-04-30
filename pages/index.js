import styled from "styled-components";

const Title = styled.h1`
  color: ${props=>props.theme.palette.blue_jeans};
`;

export default function Home() {
  return <Title>Miami</Title>;
}
