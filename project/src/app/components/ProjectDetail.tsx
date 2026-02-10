import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Code2 } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Header */}
          <div className="mb-8 lg:mb-12">
            <p className="text-yellow-500 text-sm sm:text-base mb-3">{project.category}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">{project.title}</h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 lg:mb-12 rounded-2xl overflow-hidden border border-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
            />
          </motion.div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12 lg:mb-16"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Site</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-gray-800 text-white rounded-lg hover:bg-[#222] transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source</span>
                </a>
              )}
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-yellow-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-sm sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-[#1a1a1a] border border-gray-800 text-white rounded-lg hover:bg-[#222] transition-colors font-medium"
            >
              Back to Portfolio
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
