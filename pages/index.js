import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
    </div>
  );
}
