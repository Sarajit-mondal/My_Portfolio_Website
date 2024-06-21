import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m34iqnc", "template_bjjk4la", form.current, {
        publicKey: "KIYlQ-kpNwMQJX0Da",
      })
      .then(
        () => {
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Meassage Send Successful",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Meassage Send error" + error.text,
          });
        }
      );
  };
  return (
    <section id="contact" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
