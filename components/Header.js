import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="mx-auto h-12 w-full flex justify-end sticky bottom-0 bg-c-teal dark:bg-c-darkgray md:top-0">
      <Nav />
    </header>
  );
}
