import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_md1plme",
        "template_92f90ip",
        form.current,
        "LGjittm5Fhbm24vPF"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0024] via-[#320979] to-[#240066] text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Subtle glowing orbs in background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(255,215,0,0.15)] transition-all duration-500 p-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl sm:text-5xl text-yellow-400 drop-shadow-[0_0_12px_rgba(255,255,0,0.5)]">
            Contact Me
          </h1>
          <div className="h-1 bg-yellow-500 rounded w-20 mx-auto mt-4 mb-6 shadow-yellow-400 shadow-sm"></div>
          <p className="text-gray-200 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Have a question or want to collaborate? Drop me a message below —
            I’ll get back to you soon!
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold text-yellow-400">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black outline-none transition-all duration-300 placeholder:text-gray-300 text-white"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold text-yellow-400">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black outline-none transition-all duration-300 placeholder:text-gray-300 text-white"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-yellow-400">
              Message
            </label>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Write your message..."
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black outline-none transition-all duration-300 placeholder:text-gray-300 text-white resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-semibold tracking-wide text-black bg-yellow-400 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
