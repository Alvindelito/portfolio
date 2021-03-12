import Nextjs from '../public/nextjs.svg';
import SocialMedia from './SocialMedia';
export default function Footer() {
  return (
    <footer className="py-4 bg-c-teal dark:bg-c-darkgray">
      <SocialMedia />
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center">
        <p className="self-center mx-2 dark:text-c-teal">
          © All rights are reserved | 2021 | Made with
        </p>
        <Nextjs
          className="dark:bg-c-gray"
          viewBox="0 0 205 125"
          width="70"
          height="40"
        />
      </div>
    </footer>
  );
}
