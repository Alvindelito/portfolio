import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect } from 'react';
import Moon from '../public/moon.svg';
import Sun from '../public/sun.svg';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(theme === setTheme(theme === 'dark' ? 'light' : 'dark'));
  }, []);
  return (
    <nav className="flex mx-auto items-center justify-center text-white dark:text-c-teal md:w-9/12 md:justify-center max-w-screen-lg">
      <Link href="/">
        <a className="border-r border-black dark:border-gray-50 p-2 md:px-1 md:mx-3 md:text-xl font-light hover:underline md:border-none">
          Home
        </a>
      </Link>
      <Link href="/#about">
        <a className="border-r border-black dark:border-gray-50 p-2 md:px-1 md:mx-3 md:text-xl font-light hover:underline md:border-none">
          About
        </a>
      </Link>
      <Link href="/#applications">
        <a className="border-r border-black dark:border-gray-50 p-2 md:px-1 md:mx-3 md:text-xl font-light hover:underline md:border-none">
          Apps
        </a>
      </Link>
      <Link href="/resume">
        <a className="border-r border-black dark:border-gray-50 p-2 md:px-1 md:mx-3 md:text-xl font-light hover:underline md:border-none">
          Resume
        </a>
      </Link>
      <Link href="/#contact">
        <a className="border-r border-black dark:border-gray-50 p-2 md:px-1 md:mx-3 text-lg md:text-xl font-light hover:underline md:border-none">
          Contact
        </a>
      </Link>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}
