import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { WordRotate } from "@/components/WordRotate";
import { toast } from "sonner";
import LinkedinButton from "@/components/LinkedinBtn";
import GithubButton from "@/components/GithubBtn";
import InstagramButton from "@/components/InstagramBtn";
import TwitterButton from "@/components/TwitterBtn";
import BackToTopButton from "@/components/BackToTop";

// REQUIRED EmailJS KEYS
const SERVICE_ID = "service_r5sopua";
const TEMPLATE_ID = "template_ebjxtkn";
const PUBLIC_KEY = "uFDj98cLlr4NUnQ4I";

export default function Socials() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  

  // FORM SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      // Success toast
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
        duration: 5000,
      });

      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      // Error toast
      toast.error("Failed to send message", {
        description: "Please try again or email me directly at ashutosh.kumarofficial@gmail.com",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">
            <WordRotate
              words={["Get In Touch", "Contact Me"]}
              className="font-doto"
            />
          </h2>
                  <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#10B9B7] to-transparent rounded-full" />

        </div>
        
        {/* SOCIAL BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          
          <LinkedinButton/>
          <GithubButton/>
          <InstagramButton/>
          <TwitterButton/>
        </div>

        {/* FORM */}
        <div className="max-w-lg mx-auto bg-[#0d1321]/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-6">Send a Message</h3>

          <div className="space-y-4">
            {/* name */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-all"
              required
            />

            {/* email */}
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={(e) =>
                setFormData({ ...formData, from_email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-all"
              required
            />

            {/* message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-all resize-none"
              required
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* button animations */}
      <style>{`
        .social-btn {
          width: 140px;
          height: 40px;
          border-radius: 30px;
          background-color: white;
          border: 2px solid var(--platform-color);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .social-btn:active {
          transform: scale(1.03);
        }
        .social-text1 {
          font-size: 15px;
          font-weight: 600;
          margin-left: 25%;
          color: #333;
        }
        .social-icon {
          position: absolute;
          top: 8px;
          left: 8px;
          color: var(--platform-color);
          transition: transform 0.5s;
        }
        .social-btn:hover .social-icon {
          transform: translateX(104px);
        }
        .social-text2 {
          position: absolute;
          top: 28%;
          left: -60px;
          font-weight: 700;
          color: white;
          transition: transform 0.6s;
        }
        .social-btn:hover .social-text2 {
          transform: translateX(110px);
        }
        .social-icon::before {
          position: absolute;
          left: -100px;
          top: -8px;
          z-index: -1;
          content: '';
          width: 140px;
          height: 40px;
          border-radius: 30px;
          background-color: var(--platform-color);
        }
      `}</style>
      <div className="flex justify-center mt-14">

      <BackToTopButton/>
      </div>
    </section>
  );
}