import Page from '../components/Page';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
