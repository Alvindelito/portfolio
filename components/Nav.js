import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex w-9/12 mx-auto self-center justify-end">
      {/* Home */}
      <Link href="/">
        <a className="m-3 text-xl font-medium hover:underline">Home</a>
      </Link>
      {/* About */}
      <Link href="#about">
        <a className="m-3 text-xl font-medium hover:underline">About</a>
      </Link>
      {/* TODO: Projects */}
      <Link href="/">
        <a className="m-3 text-xl font-medium hover:underline">Projects</a>
      </Link>
      {/* TODO: Resume */}
      <Link href="/">
        <a className="m-3 text-xl font-medium hover:underline">Resume</a>
      </Link>
      {/* TODO: Contact */}
      <Link href="/">
        <a className="m-3 text-xl font-medium hover:underline">Contact</a>
      </Link>
    </nav>
  );
}
