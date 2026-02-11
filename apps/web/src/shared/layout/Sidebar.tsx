import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
          fixed top-0 z-50 flex
          h-screen w-[300px] flex-col border-r border-gray-800 bg-[#1a1a1a] p-8
          transition-transform duration-300 lg:sticky
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Reawpai Chunsoi</h1>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        <div className="space-y-4 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-yellow-500" />
            hello@johndoe.com
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-yellow-500" />
            +1 234 567 8900
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-yellow-500" />
            San Francisco, CA
          </div>
        </div>

        <div className="mt-auto flex gap-3 pt-6">
          {[Linkedin, Github, Twitter].map((Icon, i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#222] transition-colors hover:text-yellow-500"
            >
              <Icon className="h-5 w-5" />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
