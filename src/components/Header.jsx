import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import useThemeStore from "../store/theme";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", download: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-100 dark:bg-neutral-950 text-black dark:text-white backdrop-blur-md z-50 transition-all duration-300 px-8 py-6`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-xl md:text-3xl font-bold"
        >
          Rizwan Khan
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="hidden md:flex gap-10 text-base lg:text-lg font-medium items-center"
        >
          {links.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors flex items-center"
                {...(link.download && { download: true })}
              >
                {link.name}
              </a>
            </motion.div>
          ))}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="hover:text-blue-500 transition-colors text-xl"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.button>
        </motion.div>

        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            className="hover:text-blue-500 transition-colors text-xl"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-neutral-900 overflow-hidden"
          >
            <div className="container mx-auto pt-6 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-500 transition-colors flex items-center text-lg font-semibold py-2"
                    onClick={handleLinkClick}
                    {...(link.download && { download: true })}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;