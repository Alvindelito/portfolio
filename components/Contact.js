import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="container bg-gray-50 py-8">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-center text-3xl font-extralight mb-4">Contact</h3>
        <p className="text-center">
          Thanks for making it this far. Lets get in Touch!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
