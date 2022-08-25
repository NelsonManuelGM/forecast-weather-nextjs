import { Global } from "@emotion/react";

import { globalStyle, AppTheme } from "../styles/global";
import MobileWrapper from "../src/components/wrapper";
import AppContext from "../src/context";
import { reducer, initialState } from "../src/context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContext initialState={initialState} reducers={reducer}>
        <Global styles={globalStyle} />
        <AppTheme>
          <MobileWrapper>
            <Component {...pageProps} />
          </MobileWrapper>
        </AppTheme>
      </AppContext>
    </>
  );
}

export default MyApp;
