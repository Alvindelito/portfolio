export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      className="flex flex-col w-10/12 lg:w-6/12 mx-auto"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
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
      <button
        type="submit"
        className="place-self-start border border-black bg-c-darkgray text-gray-200 text-lg p-1 rounded-md hover:bg-c-teal hover:text-c-black dark:bg-c-black dark:border dark:border-c-teal dark:hover:bg-c-teal dark:hover:text-c-black"
      >
        Submit
      </button>
    </form>
  );
}
