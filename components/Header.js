import Logo from './Logo';
import Nav from './Nav';

// make header sticky later
// sticky top-0 bg-blue-100

export default function Header() {
  return (
    <header className="mx-auto h-12 w-full flex justify-end sticky bottom-0 bg-blue-100 lg:top-0">
      <Nav />
    </header>
  );
}
