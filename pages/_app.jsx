import React, { useEffect, useState } from "react";
import "../styles/globals.css";

import Splash from "../components/Splash";
// import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div className="bg  ">
      {/* {isLoading ? <Splash finishLoading={() => setIsLoading(false)} /> : <Component {...pageProps} />} */}
      <Component {...pageProps} />
    </div>
  );
}
