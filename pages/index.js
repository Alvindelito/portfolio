import Head from 'next/head';
import About from '../components/About';
import Applications from '../components/Applications';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Alvin Delito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Applications />
      <Contact />
    </div>
  );
}
