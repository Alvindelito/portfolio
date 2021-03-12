import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="mx-auto h-16 pb-4 md:pb-0 md:h-12 w-full flex justify-end sticky border-t border-black md:border-none bottom-0 bg-c-teal dark:bg-c-darkgray md:top-0">
      <Nav />
    </header>
  );
}
