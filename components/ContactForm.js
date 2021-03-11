export default function ContactForm() {
  return (
    <form
      name="contact"
      method="/"
      className="flex flex-col w-10/12 lg:w-6/12 mx-auto"
    >
      <label htmlFor="name" className="my-2">
        Name<span className="text-red-500">*</span>
        <input
          className="h-8 w-full bg-gray-50 outline-none border-b border-gray-300 focus:border-black focus:border-b focus:shadow-lg hover:border-black"
          type="text"
          name="name"
          placeholder="your name here"
          required
        />
      </label>
      <label htmlFor="email" className="my-2">
        Email<span className="text-red-500">*</span>
        <input
          className="h-8 w-full bg-gray-50 outline-none border-b border-gray-300 focus:border-black focus:border-b focus:shadow-lg hover:border-black"
          type="email"
          name="email"
          placeholder="your email here"
          required
        />
      </label>
      <label htmlFor="message" className="my-2">
        Message<span className="text-red-500">*</span>
        <textarea
          name="message"
          className="w-full h-32 bg-gray-50 outline-none rounded-lg border border-gray-300 p-2 focus:bg-white focus:shadow-lg hover:border-black"
          required
        />
      </label>
      <button
        type="submit"
        className="place-self-start border border-black bg-gray-700 text-gray-200 text-lg p-1 rounded-md hover:text-gray-700 hover:bg-gray-50"
      >
        Submit
      </button>
    </form>
  );
}
