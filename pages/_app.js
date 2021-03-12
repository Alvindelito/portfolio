import { ThemeProvider } from 'next-themes';
import Page from '../components/Page';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';
import useWindowSize from '../lib/useWindowSize';

function MyApp({ Component, pageProps }) {
  const size = useWindowSize();

  if (size.width < 640) {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Footer />
        <Header />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
