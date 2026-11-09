import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/geist';
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Script from 'next/script';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Script
        async
        data-goatcounter="https://chen0121.goatcounter.com/count"
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
    </>
  );
});

export default MyApp;
