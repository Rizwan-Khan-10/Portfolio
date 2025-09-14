import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiBootstrap, SiRedux, SiGit, SiGithub, SiVercel, SiNetlify, SiC, SiCplusplus, SiPython, SiFramer } from "react-icons/si";
import useThemeStore from "../store/theme";
import { useEffect } from "react";
import { Header, About, Skill, Project,Contact } from "../components/index";

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

export default function App() {
  return (
    <div className="relative w-full min-h-screen text-white">
      <FloatingIconsBG />
      <div className="relative">
        <Header />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
