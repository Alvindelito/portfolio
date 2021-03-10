import Page from '../components/Page';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Page>
  );
}

export default MyApp;
