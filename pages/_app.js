import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/global";
import MobileWrapper from "../src/components/wrapper";
import AppContext from "../src/context";
import { reducer, initialState } from "../src/context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppContext initialState={initialState} reducers={reducer}>
        <ThemeProvider theme={theme}>
          <MobileWrapper>
            <Component {...pageProps} />
          </MobileWrapper>
        </ThemeProvider>
      </AppContext>
    </>
  );
}

export default MyApp;
