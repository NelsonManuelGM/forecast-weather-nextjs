import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: inherit;
  overflow: hidden;

  .button {
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }
  .button-right {
    right: 0px;
  }
  .button-left {
    left: 0px;
  }
`;

const ForecastItems = styled.ul`
  padding: 10px 0;
  display: inline-flex;
  display: -webkit-inline-box;

  /* overflow: hidden; */
  list-style-type: none;
  margin: 0px;
`;

export { ForecastItems, Wrapper };
