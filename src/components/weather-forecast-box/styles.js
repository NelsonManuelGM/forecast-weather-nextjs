import styled from "@emotion/styled";

const Wrapper = styled.li`
  width: 90px;
  height: 150px;
  padding: 15px 10px;
  margin: 0 5px;
  border: 1px solid ${(props) => props.theme.palette.oxford_blue};
  border-radius: 30px;
  background-color: ${(props) => props.theme.palette.rich_black_fogra_29};
  color: ${(props) => props.theme.palette.platinum};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export { Wrapper };
