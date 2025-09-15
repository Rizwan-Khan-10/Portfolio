import projectData from '../assets/index';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

function Project() {
    const navigate = useNavigate();

    return (
        <section id="projects" className="px-6 py-12 text-black dark:text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-lg">
                My Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                {projectData.map((project) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        key={project.id}
                        className="w-full sm:w-80 bg-gray-100 dark:bg-neutral-950 border border-black dark:border-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                        onClick={() => navigate(`/project?id=${project.id}`)}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={project.img[0]}
                                alt={project.name}
                                className="w-full h-48 object-cover border-b"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl mb-3 font-bold">
                                <span className='font-semibold'>Name:</span> {project.name}
                            </h3>

                            <p className="text-sm leading-relaxed">
                                <span className='font-semibold'>Description:</span> {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Project;