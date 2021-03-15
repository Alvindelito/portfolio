import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="bg-gray-50 dark:bg-c-black h-screen">
      <div className=" max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl pt-16 dark:text-c-teal p-4">Success!</h2>
        <p className="text-lg dark:text-c-gray">
          Your message has been successfully sent! Please allow 2-3 business
          days for me to get back to you.
          <br />
          Thank you!
        </p>
        <Link href="/">
          <a className="underline hover:text-blue-600 dark:text-c-teal dark:hover:text-blue-600">
            Return to Home Page
          </a>
        </Link>
      </div>
    </div>
  );
}
