import { useRouter } from 'next/router';
export default function ContactForm() {
  const router = useRouter();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      .then(() => router.push('/success'))
      .catch((error) => alert(error));
  };
  return (
    <form
      name="contact"
      className="flex flex-col w-10/12 lg:w-6/12 mx-auto"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="hidden">
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
      <label htmlFor="name" className="my-2 text-c-darkgray dark:text-c-gray">
        Name<span className="text-red-500">*</span>
        <input
          className="h-8 w-full bg-gray-50 dark:bg-c-black outline-none border-b border-gray-300 focus:border-c-teal focus:border-b focus:shadow-lg hover:border-c-teal"
          type="text"
          name="name"
          placeholder="your name here"
          required
        />
      </label>
      <label htmlFor="email" className="my-2 text-c-darkgray dark:text-c-gray">
        Email<span className="text-red-500">*</span>
        <input
          className="h-8 w-full bg-gray-50 dark:bg-c-black outline-none border-b border-gray-300 focus:border-c-teal focus:border-b focus:shadow-lg hover:border-c-teal"
          type="email"
          name="email"
          placeholder="your email here"
          required
        />
      </label>
      <label
        htmlFor="message"
        className="my-2 text-c-darkgray dark:text-c-gray"
      >
        Message<span className="text-red-500">*</span>
        <textarea
          name="message"
          className="w-full h-32 bg-gray-50 dark:bg-c-black outline-none rounded-lg border border-gray-300 p-2 focus:shadow-lg focus:border-c-teal hover:border-c-teal"
          required
        />
      </label>
      <div data-netlify-recaptcha="true"></div>
      <button
        type="submit"
        className="place-self-start border border-black bg-c-darkgray text-gray-200 text-lg p-1 rounded-md hover:bg-c-teal hover:text-c-black dark:bg-c-black dark:border dark:border-c-teal dark:hover:bg-c-teal dark:hover:text-c-black"
      >
        Submit
      </button>
    </form>
  );
}
