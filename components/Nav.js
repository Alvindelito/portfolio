import { useTheme } from 'next-themes';
import Link from 'next/link';
import Moon from '../public/moon.svg';
import Sun from '../public/sun.svg';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex mx-auto items-center text-c-darkgray dark:text-c-teal lg:w-9/12 lg:justify-end max-w-screen-lg">
      <Link href="/">
        <a className="border-r border-l border-black dark:border-gray-50 p-1 lg:px-1 lg:mx-3 lg:text-xl font-extralight hover:underline lg:border-none">
          Home
        </a>
      </Link>
      <Link href="/#about">
        <a className="border-r border-black dark:border-gray-50 p-1 lg:px-1 lg:mx-3 lg:text-xl font-extralight hover:underline lg:border-none">
          About
        </a>
      </Link>
      <Link href="/#applications">
        <a className="border-r border-black dark:border-gray-50 p-1 lg:px-1 lg:mx-3 lg:text-xl font-extralight hover:underline lg:border-none">
          Applications
        </a>
      </Link>
      <Link href="/resume">
        <a className="border-r border-black dark:border-gray-50 p-1 lg:px-1 lg:mx-3 lg:text-xl font-extralight hover:underline lg:border-none">
          Resume
        </a>
      </Link>
      <Link href="/#contact">
        <a className="border-r border-black dark:border-gray-50 p-1 lg:px-1 lg:mx-3 lg:text-xl font-extralight hover:underline lg:border-none">
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
