import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex w-9/12 justify-end items-center">
      {/* Home */}
      <Link href="/">
        <a className="mx-3 text-xl font-medium hover:underline">Home</a>
      </Link>
      {/* About */}
      <Link href="#about">
        <a className="mx-3 text-xl font-medium hover:underline">About</a>
      </Link>
      {/* TODO: Applications */}
      <Link href="#applications">
        <a className="mx-3 text-xl font-medium hover:underline">Applications</a>
      </Link>
      {/* TODO: Resume */}
      <Link href="/">
        <a className="mx-3 text-xl font-medium hover:underline">Resume</a>
      </Link>
      {/* TODO: Contact */}
      <Link href="#contact">
        <a className="mx-3 text-xl font-medium hover:underline">Contact</a>
      </Link>
    </nav>
  );
}
