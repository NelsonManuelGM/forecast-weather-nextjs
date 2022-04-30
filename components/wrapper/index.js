import Head from "next/head";

import { Canvas, Wrapper } from "./styles";

export default function MobileWrapper({
  title = "Weather Forecast",
  metaName = "name",
  metaContent = "weather forecast for any place",
  children,
}) {

  return (
    <Canvas>
      <Head>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>{children}</Wrapper>
    </Canvas>
  );
}
