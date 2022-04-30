import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global";
import MobileWrapper from "../components/wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MobileWrapper>
          <Component {...pageProps} />
        </MobileWrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
