import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex mx-auto items-center lg:w-9/12 lg:justify-end max-w-screen-lg">
      <Link href="/">
        <a className="border-r border-l border-black px-1 lg:mx-3 lg:text-xl font-medium hover:underline lg:border-none">
          Home
        </a>
      </Link>
      <Link href="/#about">
        <a className="border-r border-black px-1 lg:mx-3 lg:text-xl font-medium hover:underline lg:border-none">
          About
        </a>
      </Link>
      <Link href="/#applications">
        <a className="border-r border-black px-1 lg:mx-3 lg:text-xl font-medium hover:underline lg:border-none">
          Applications
        </a>
      </Link>
      <Link href="/resume">
        <a className="border-r border-black px-1 lg:mx-3 lg:text-xl font-medium hover:underline lg:border-none">
          Resume
        </a>
      </Link>
      <Link href="/#contact">
        <a className="border-r border-black px-1 lg:mx-3 lg:text-xl font-medium hover:underline lg:border-none">
          Contact
        </a>
      </Link>
    </nav>
  );
}
