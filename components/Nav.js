import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex w-9/12 justify-end items-center">
      <Link href="/">
        <a className="mx-3 text-xl font-medium hover:underline">Home</a>
      </Link>
      <Link href="/#about">
        <a className="mx-3 text-xl font-medium hover:underline">About</a>
      </Link>
      <Link href="/#applications">
        <a className="mx-3 text-xl font-medium hover:underline">Applications</a>
      </Link>
      <Link href="/resume">
        <a className="mx-3 text-xl font-medium hover:underline">Resume</a>
      </Link>
      <Link href="/#contact">
        <a className="mx-3 text-xl font-medium hover:underline">Contact</a>
      </Link>
    </nav>
  );
}
