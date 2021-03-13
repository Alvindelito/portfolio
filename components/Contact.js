import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 dark:bg-c-black pt-8 pb-16 ">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-c-teal text-center text-3xl font-light mb-4">
          Contact
        </h3>
        <p className="text-center text-c-darkgray dark:text-c-gray">
          Thanks for making it this far. Lets get in Touch!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
