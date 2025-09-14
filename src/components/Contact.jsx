import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  return (
    <section id="contact" className="px-6 py-16 text-black dark:text-white">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form
          action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`}
          method="POST"
          className="flex flex-col gap-6 bg-gray-100 dark:bg-neutral-950 p-8 rounded-lg shadow-xl border border-black dark:border-white"
          onSubmit={() => setFormStatus("Message sent successfully!")}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className="w-full px-4 py-3 rounded-md border border-black dark:border-white 
              bg-gray-100 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 rounded-md border border-black dark:border-white 
              bg-gray-100 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              autoComplete="off"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md border border-black dark:border-white 
              bg-gray-100 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-transform duration-200 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>

          {formStatus && (
            <p className="text-green-500 text-center mt-3">{formStatus}</p>
          )}
        </form>
      </div>
    </section>
  );
}