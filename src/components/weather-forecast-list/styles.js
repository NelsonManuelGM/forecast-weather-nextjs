import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 380px;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.palette.oxford_blue};
  border-radius: 10px;
  margin: 0 0 10px 0;
  padding: 5px 0;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  p {
    width: 60px;
    height: 30px;
    display: inherit;
    justify-content: center;
    align-items: center;
  }

  p.day {
    width: 80px;
    justify-content: start;
    background-color: #0526492b;
    padding-left: 5px;
  }

  .info-spot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { Wrapper, Card };
