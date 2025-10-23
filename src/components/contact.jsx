import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const validateForm = () => {
    const name = form.current["name"].value.trim();
    const email = form.current["email"].value.trim();
    const message = form.current["message"].value.trim();

    if (name.length < 3) {
      toast.warning("Name must be at least 3 characters long.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.warning("Please enter a valid email address.");
      return false;
    }

    if (message.length < 10) {
      toast.warning("Message must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Contact Card */}
      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(255,215,0,0.15)] transition-all duration-500 p-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl sm:text-5xl text-yellow-400 drop-shadow-[0_0_12px_rgba(255,255,0,0.5)]">
            Contact Me
          </h1>
          <div className="h-1 bg-yellow-500 rounded w-20 mx-auto mt-4 mb-6 shadow-yellow-400 shadow-sm"></div>
          <p className="text-gray-200 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Have a question or want to collaborate? Drop me a message — I’ll get
            back to you soon!
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1 relative">
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder=" "
                autoComplete="off"
                className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-500 focus:bg-white/20 text-white placeholder-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3.5 text-gray-300 text-sm font-semibold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            <div className="flex-1 relative">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder=" "
                autoComplete="off"
                className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-500 focus:bg-white/20 text-white placeholder-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3.5 text-gray-300 text-sm font-semibold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-sm"
              >
                Email
              </label>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              required
              name="message"
              id="message"
              rows="5"
              placeholder=" "
              autoComplete="off"
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/10 border border-yellow-400/20 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-500 focus:bg-white/20 text-white placeholder-transparent outline-none transition-all duration-300 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3.5 text-gray-300 text-sm font-semibold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-yellow-400 peer-focus:text-sm"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-semibold tracking-wide text-black bg-yellow-400 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-t-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
