// pages/_app.js

import '../styles/globals.css'; // Importera dina globala stilar här

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
