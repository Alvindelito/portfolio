export default function Footer() {
  return (
    <footer className="py-4 bg-c-teal dark:bg-c-darkgray">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center">
        <p className="self-center mx-2 dark:text-c-teal">
          © All rights are reserved | 2021 | Made with
        </p>
        <img
          width="50px"
          height="50px"
          className="dark:bg-c-gray dark:px-1"
          src="https://res.cloudinary.com/alvindelito/image/upload/v1615257382/portfolio/Nextjs-_rj0c0l.svg"
        />
      </div>
    </footer>
  );
}
