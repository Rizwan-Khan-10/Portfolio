import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import avatar from "../assets/avatar.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-black dark:text-white gap-12 bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full md:w-1/2"
      >
        <img
          src={avatar}
          alt="Profile Avatar"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
        />
        <span className="mt-4 text-center text-sm md:text-base italic tracking-wide">
          "Turning ideas into clean and functional code"
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-left"
      >
        <h3 className="text-2xl md:text-4xl mb-3">Hello World!</h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          I'm Rizwan Khan
        </h1>
        <p className="text-xl md:text-3xl font-medium mb-6">
          Full Stack Developer
        </p>
        <div className="flex items-center gap-6 text-3xl md:text-4xl">
          <span className="text-base md:text-lg">Quick Connect:</span>
          <a
            href="https://github.com/Rizwan-Khan-10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rizwan-khan-504b09339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}