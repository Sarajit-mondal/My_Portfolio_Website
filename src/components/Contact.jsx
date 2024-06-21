const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
          />
          <textarea
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
