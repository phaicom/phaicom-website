import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Linkedin, Github, Twitter, Phone, Menu, X, Code2, FileCode, Server, Palette, Zap, Database, Flame, FileJson } from "lucide-react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router";
import { projects } from "./data/projects";
import ProjectDetail from "./components/ProjectDetail";

type Page = "about" | "resume" | "portfolio" | "contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout initialPage="about" />} />
        <Route path="/resume" element={<MainLayout initialPage="resume" />} />
        <Route path="/portfolio" element={<MainLayout initialPage="portfolio" />} />
        <Route path="/contact" element={<MainLayout initialPage="contact" />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout({ initialPage = "about" }: { initialPage?: Page }) {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center text-white"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      <div className="flex">
        {/* Left Sidebar */}
        <aside
          className={`
            w-[280px] sm:w-[300px] lg:w-[320px] xl:w-[360px]
            bg-[#1a1a1a] border-r border-gray-800 
            p-6 lg:p-8 
            flex flex-col items-center 
            fixed lg:sticky top-0
            h-screen 
            overflow-y-auto
            z-50
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <Sidebar />
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 min-h-screen w-full lg:w-auto">
          {/* Navigation */}
          <nav className="sticky top-0 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6 flex-wrap">
              {(["about", "resume", "portfolio", "contact"] as Page[]).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setSidebarOpen(false);
                    }}
                    className={`text-sm sm:text-base capitalize transition-colors relative py-2 ${
                      currentPage === page
                        ? "text-yellow-500"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {page}
                    {currentPage === page && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500"
                      />
                    )}
                  </button>
                )
              )}
            </div>
          </nav>

          {/* Page Content */}
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentPage === "about" && <AboutPage />}
                {currentPage === "resume" && <ResumePage />}
                {currentPage === "portfolio" && <PortfolioPage />}
                {currentPage === "contact" && <ContactPage />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-full flex flex-col items-center h-full">
      {/* Profile Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#222] rounded-2xl p-4 sm:p-6 w-full mb-6 lg:mb-8"
      >
        {/* Avatar */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-5xl sm:text-6xl">
            👨‍💻
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#222]"
          />
        </div>

        {/* Name */}
        <h1 className="text-xl sm:text-2xl text-center mb-1">John Doe</h1>
        <p className="text-sm sm:text-base text-gray-400 text-center">Software Developer</p>
      </motion.div>

      {/* Contact Info */}
      <div className="w-full space-y-3 lg:space-y-4 mb-6 lg:mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3 bg-[#222] rounded-xl p-3 sm:p-4"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
            <a
              href="mailto:hello@johndoe.com"
              className="text-xs sm:text-sm text-gray-300 hover:text-yellow-500 transition-colors break-all"
            >
              hello@johndoe.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-3 bg-[#222] rounded-xl p-3 sm:p-4"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-500 uppercase mb-1">Phone</p>
            <p className="text-xs sm:text-sm text-gray-300">+1 234 567 8900</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-3 bg-[#222] rounded-xl p-3 sm:p-4"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-500 uppercase mb-1">Location</p>
            <p className="text-xs sm:text-sm text-gray-300">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 mt-auto pt-4"
      >
        {[
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Twitter, href: "#", label: "Twitter" },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ y: -4 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#222] rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-[#2a2a2a] transition-colors"
          >
            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

function AboutPage() {
  const services = [
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Professional development of applications for Android and iOS.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "💻",
      title: "Backend Development",
      description:
        "High-performance backend services designed for scalability and seamless user experience.",
    },
  ];

  const skills = [
    { name: "React", color: "from-blue-500 to-cyan-500", icon: Code2 },
    { name: "TypeScript", color: "from-cyan-500 to-blue-400", icon: FileCode },
    { name: "Node.js", color: "from-green-500 to-emerald-500", icon: Server },
    { name: "Tailwind", color: "from-orange-500 to-red-500", icon: Palette },
    { name: "Next.js", color: "from-purple-500 to-pink-500", icon: Zap },
    { name: "MongoDB", color: "from-green-600 to-green-400", icon: Database },
    { name: "Firebase", color: "from-yellow-500 to-orange-500", icon: Flame },
    { name: "Python", color: "from-blue-600 to-blue-400", icon: FileJson },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">About Me</h1>
      <div className="w-12 h-1 bg-yellow-500 mb-6 lg:mb-8"></div>

      <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-400 mb-8 lg:mb-12 leading-relaxed">
        <p>
          A passionate developer with strong expertise in creating modern web and mobile
          applications. Proven track record in delivering cutting-edge solutions, including
          API integration, third-party libraries, and performance optimization.
          Adept at debugging to ensure high-quality, responsive apps and an
          agile collaborator committed to staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled developer to breathe life into
          your project and exceed your expectations, I am here to collaborate
          and create magic together. Reach out, and let's transform your vision
          into a reality!
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">What I'm Doing</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-10 lg:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 flex gap-3 sm:gap-4"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">{service.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg lg:text-xl mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 flex items-center gap-2 cursor-pointer hover:border-yellow-500 transition-colors"
          >
            <skill.icon className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-300 text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ResumePage() {
  const education = [
    {
      period: "2015 - 2019",
      title: "Bachelor of Computer Science",
      institution: "University Name",
      description:
        "Focused on software engineering, algorithms, and web development. Completed with honors.",
    },
    {
      period: "2013 - 2015",
      title: "Associate Degree",
      institution: "Community College",
      description:
        "Foundation in computer science and mathematics.",
    },
  ];

  const experience = [
    {
      period: "2021 - Present",
      title: "Senior Developer",
      company: "Tech Company Inc.",
      description:
        "Leading development of enterprise applications and mentoring junior developers. Architecting scalable solutions.",
    },
    {
      period: "2019 - 2021",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Built responsive web applications and implemented modern UI/UX designs for diverse clients.",
    },
    {
      period: "2018 - 2019",
      title: "Junior Developer",
      company: "Startup Co.",
      description:
        "Contributed to full-stack development of web applications using modern technologies.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Resume</h1>
      <div className="w-12 h-1 bg-yellow-500 mb-6 lg:mb-8"></div>

      <section className="mb-10 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">Education</h2>
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 relative pl-6 sm:pl-8 lg:pl-10"
            >
              <div className="absolute left-0 top-6 w-1 h-12 sm:h-16 bg-yellow-500 rounded-r"></div>
              <p className="text-xs sm:text-sm lg:text-base text-yellow-500 mb-2">{item.period}</p>
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-2">{item.institution}</p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">Experience</h2>
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 relative pl-6 sm:pl-8 lg:pl-10"
            >
              <div className="absolute left-0 top-6 w-1 h-12 sm:h-16 bg-yellow-500 rounded-r"></div>
              <p className="text-xs sm:text-sm lg:text-base text-yellow-500 mb-2">{item.period}</p>
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-2">{item.company}</p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Portfolio</h1>
      <div className="w-12 h-1 bg-yellow-500 mb-6 lg:mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            onClick={() => navigate(`/project/${project.id}`)}
            className="group bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-yellow-500 mb-1 sm:mb-2">{project.category}</p>
              <h3 className="text-base sm:text-lg lg:text-xl">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Contact</h1>
      <div className="w-12 h-1 bg-yellow-500 mb-6 lg:mb-8"></div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6">Get In Touch</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 lg:mb-8 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:hello@johndoe.com"
                  className="text-sm sm:text-base lg:text-lg hover:text-yellow-500 transition-colors break-all"
                >
                  hello@johndoe.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-sm sm:text-base lg:text-lg">+1 234 567 8900</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Location</p>
                <p className="text-sm sm:text-base lg:text-lg">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4 sm:space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm sm:text-base mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors resize-none text-sm sm:text-base"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-3 sm:py-4 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base lg:text-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}