// pages/_app.tsx

import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
