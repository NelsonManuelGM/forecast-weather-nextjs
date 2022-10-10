import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 10px 20px 0px 20px;

  header {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    p {
      cursor: pointer;
    }

    .cl-pointer:hover {
      cursor: pointer;
      fill: ${(props) => props.theme.palette.platinum};
    }
  }
`;

const NoInfoWarning = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  p {
    margin-top: 20px;
  }
`;

export { Wrapper, NoInfoWarning };
