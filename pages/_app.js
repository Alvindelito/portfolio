import Page from '../components/Page';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';
import useWindowSize from '../lib/useWindowSize';

function MyApp({ Component, pageProps }) {
  const size = useWindowSize();

  if (size.width < 640) {
    return (
      <Page>
        <Component {...pageProps} />
        <Footer />
        <Header />
      </Page>
    );
  }

  return (
    <Page>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Page>
  );
}

export default MyApp;
