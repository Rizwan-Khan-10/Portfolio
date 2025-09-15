import { useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import vs from '../assets/vs.png';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
    FaJava,
    FaBootstrap,
    FaGithub,
} from "react-icons/fa";
import {
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiTailwindcss,
    SiCplusplus,
    SiExpress,
    SiFramer,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiMysql,
    SiC
} from "react-icons/si";
import useThemeStore from "../store/theme";
import { useRef } from "react";

export default function Skills() {
    const { isDark } = useThemeStore();
    const [activeTab, setActiveTab] = useState("frontend");
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const isTopInView = useInView(topRef, { amount: 0.4, once: false });
    const isBottomInView = useInView(bottomRef, { amount: 0.4, once: false });

    const skillsData = {
        frontend: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        ],
        backend: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className={`${isDark} ? "text-white" : "text-black"`} /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        ],
        tools: [
            { name: "VS Code", icon: <img src={vs} alt="VS Code" className="w-12 h-12 rounded-lg mix-blend-color-screen" /> },
            { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
            { name: "GitHub", icon: <FaGithub className={`${isDark} ? "text-white" : "text-black"`} /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
            { name: "Vercel", icon: <SiVercel className={`${isDark} ? "text-white" : "text-black"`} /> },
            { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
        ],
        others: [
            { name: "Python", icon: <FaPython className="text-yellow-500" /> },
            { name: "Java", icon: <FaJava className="text-red-600" /> },
            { name: "C", icon: <SiC className="text-blue-500" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
        ],
    };

    return (
        <section
            id="skills"
            className="w-full flex flex-col items-center justify-center px-6 md:px-20 text-black dark:text-white pb-20"
        >
            <motion.div
                ref={topRef}
                initial={{ opacity: 0, y: -50 }}
                animate={isTopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center items-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-black dark:text-white drop-shadow-lg">
                    My Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.keys(skillsData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-semibold capitalize shadow-lg border border-black dark:border-white text-lg transition-all duration-300 ${activeTab === tab
                                ? "bg-white dark:bg-black"
                                : "bg-gray-200 dark:bg-neutral-900 hover:bg-white dark:hover:bg-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    ref={bottomRef}
                    key={activeTab}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
                >
                    {skillsData[activeTab].map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-2xl bg-white dark:bg-black backdrop-blur-sm"
                        >
                            <div className="text-5xl mb-3 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <span className="text-lg font-semibold text-black dark:text-white text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}