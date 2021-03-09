import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
