import { ThemeProvider, Global } from "@emotion/react";

import { globalStyle, theme } from "../styles/global";
import MobileWrapper from "../src/components/wrapper";
import AppContext from "../src/context";
import { reducer, initialState } from "../src/context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContext initialState={initialState} reducers={reducer}>
        <Global styles={globalStyle} />
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
