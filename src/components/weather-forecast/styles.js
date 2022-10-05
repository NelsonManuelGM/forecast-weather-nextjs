import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 15px;

  header {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    width: 100%;

    p {
      margin: 0;
      font-size: small;
      color: ${(props) => props.theme.palette.platinum + "80"};
      cursor: pointer;
    }

    .cl-pointer:hover {
      cursor: pointer;
      fill: ${(props) => props.theme.palette.platinum};
    }
  }
`;

export { Wrapper };
