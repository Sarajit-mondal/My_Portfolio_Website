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
    <div className="bg-gray-900 ">
      <h2 className="text-3xl font-extrabold pt-10 text-white">
        Education & Contact
      </h2>
      <div className="flex  flex-col justify-center md:flex-row gap-12">
        {/* education section  */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-white mb-6 text-center">
              Education
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-500">
                National University Bangladesh
              </h3>
              <p className="mt-2 text-lg text-gray-800">
                Bachelor of Business Administration (B.B.A)
              </p>
              <p className=" text-lg text-gray-700">
                graduation date : may 2023
              </p>
            </div>
          </div>
        </section>
        {/* contact section */}
        <section id="contact" className="text-white p-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Contact</h2>
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
                className="w-full bg-blue-500  px-4 py-2 rounded hover:bg-blue-600 transition text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
