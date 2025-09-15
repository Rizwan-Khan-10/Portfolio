import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import projectData from '../assets/index';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiBootstrap, SiRedux, SiGit, SiGithub, SiVercel, SiNetlify, SiC, SiCplusplus, SiPython, SiFramer } from "react-icons/si";
import useThemeStore from "../store/theme";

const icons = (isDark) => [
  { Icon: FaHtml5, color: "#e34f26", top: "15%", left: "8%" },
  { Icon: FaCss3Alt, color: "#1572b6", top: "15%", left: "30%" },
  { Icon: FaJs, color: "#f7df1e", top: "15%", left: "55%" },
  { Icon: SiGit, color: "#F05032", top: "15%", left: "80%" },
  { Icon: SiTailwindcss, color: "#38BDF8", top: "30%", left: "18%" },
  { Icon: SiBootstrap, color: "#7952B3", top: "30%", left: "45%" },
  { Icon: SiRedux, color: "#764ABC", top: "30%", left: "75%" },
  { Icon: FaReact, color: "#61dafb", top: "45%", left: "8%" },
  { Icon: SiMysql, color: "#4479A1", top: "45%", left: "30%" },
  { Icon: SiPostgresql, color: "#336791", top: "45%", left: "55%" },
  { Icon: SiFramer, color: "#e91e63", top: "45%", left: "85%" },
  { Icon: FaNodeJs, color: "#68a063", top: "60%", left: "18%" },
  { Icon: SiExpress, color: isDark ? "white" : "black", top: "60%", left: "45%" },
  { Icon: SiMongodb, color: "#4DB33D", top: "60%", left: "75%" },
  { Icon: SiC, color: "#A8B9CC", top: "75%", left: "8%" },
  { Icon: SiCplusplus, color: "#00599C", top: "75%", left: "30%" },
  { Icon: FaJava, color: "#f89820", top: "75%", left: "55%" },
  { Icon: SiPython, color: "#3776AB", top: "75%", left: "80%" },
  { Icon: SiVercel, color: isDark ? "white" : "black", top: "90%", left: "18%" },
  { Icon: SiGithub, color: isDark ? "white" : "black", top: "90%", left: "45%" },
  { Icon: SiNetlify, color: "#00C7B7", top: "90%", left: "75%" },
];

function FloatingIconsBG() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="fixed inset-0 -z-10 bg-gray-100 dark:bg-neutral-950 overflow-hidden">
      {icons(isDark).map(({ Icon, color, top, left }, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl opacity-60"
          style={{ top, left }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon color={color} />
        </motion.div>
      ))}
    </div>
  );
}

function Project() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const navigate = useNavigate();

  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white dark:text-black">
        <h1 className="text-3xl font-bold">Project not found.</h1>
      </div>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.img.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.img.length) % project.img.length
    );
  };

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const closeImageModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div className="relative w-full min-h-screen text-black dark:text-white">
      <FloatingIconsBG />
      <div className="relative">
        <section className="px-6 py-14 min-h-screen relative">
          <button
            className='absolute top-4 right-4 text-white text-lg md:text-xl p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors'
            onClick={() => navigate('/')}
          >
            <FaTimes />
          </button>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center border border-black dark:border-white">
                <img
                  src={project.img[currentImageIndex]}
                  alt={`${project.name} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() => openImageModal(project.img[currentImageIndex])}
                />

                {project.img.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-800/80 text-white p-3 rounded-full transition-all duration-300 z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-800/80 text-white p-3 rounded-full transition-all duration-300 z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{project.name}</h1>
                <p className="text-lg">{project.description}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-950 rounded-xl p-8 shadow-inner flex flex-col gap-6 border border-black dark:border-white">
              {project.links && (
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold mb-4">Links</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors duration-200 shadow-md"
                      >
                        <FaGithub className="h-5 w-5" />
                        GitHub
                      </a>
                    )}
                    {project.links.liveUrl && (
                      <a
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors duration-200 shadow-md"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}

              {project.techStack && (
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                  {Object.entries(project.techStack).map(([category, items]) => (
                    <div key={category} className="mb-4">
                      <h3 className="font-semibold capitalize mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(items) ? (
                          items.map((item, index) => (
                            <span key={index} className="bg-gray-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-sm font-medium">
                              {item}
                            </span>
                          ))
                        ) : (
                          <span className="bg-gray-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-sm font-medium">
                            {items}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.features && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {showModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={closeImageModal}
            >
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white text-lg md:text-xl p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <FaTimes />
              </button>
              <img
                src={modalImage}
                alt="Full size"
                className="max-w-full max-h-full object-contain border"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Project;