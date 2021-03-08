import Logo from './Logo';
import Nav from './Nav';

// make header sticky later
// sticky top-0 bg-blue-100

export default function Header() {
  return (
    <header className="max-w-screen-lg mx-auto flex flex-row flex-grow h-16 w-full">
      <Logo />
      <Nav />
    </header>
  );
}
