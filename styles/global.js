import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
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
    platinum: "#ffffff",
  },
  breakPoint: '400px'
};
