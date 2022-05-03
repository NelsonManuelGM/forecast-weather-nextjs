import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`;

export const theme = {
  palette: {
    rich_black_fogra_29: "#020B19ff",
    blue_jeans: "#16ABF8ff",
    azure: "#1482F3ff",
    oxford_blue: "#052649ff",
    platinum: "#E6E7E3ff",
  },
  breakPoint: '400px'
};
