import { FaHome, FaCode, FaImages, FaUserGraduate, FaLanguage, FaDownload, FaBriefcase, FaEnvelope, FaConciergeBell } from 'react-icons/fa'
import { motion } from 'framer-motion'
import cvFile from '../assets/CV/NEW CV.docx?url'

const items = [
  { id: 'home', icon: FaHome, label: 'Home' },
  { id: 'skills', icon: FaCode, label: 'Skills' },
  { id: 'services', icon: FaConciergeBell, label: 'Services' },
  { id: 'portfolio', icon: FaImages, label: 'Portfolio' },
  { id: 'projects', icon: FaBriefcase, label: 'Projects' },
  { id: 'education', icon: FaUserGraduate, label: 'Education' },
  { id: 'languages', icon: FaLanguage, label: 'Languages' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
]

export default function Sidebar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.aside
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1.5 p-2 glass rounded-2xl pointer-events-auto max-w-full overflow-x-auto scrollbar-hide"
      >
        {items.map((it) => {
          const IconComp = it.icon
          return (
            <a key={it.id} href={`#${it.id}`} className="group relative flex items-center justify-center min-w-[44px] w-11 h-11 rounded-xl bg-card hover:bg-accent hover:text-white transition-all duration-300">
              <IconComp className="text-glow group-hover:text-white" size={18} />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs bg-card text-text opacity-0 group-hover:opacity-100 shadow-glow pointer-events-none transition-all duration-300 transform group-hover:-translate-y-1">
                {it.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card" />
              </span>
            </a>
          )
        })}
        <div className="w-px h-6 bg-white/10 mx-1" />
        <a href={cvFile} download className="group relative flex items-center justify-center min-w-[44px] w-11 h-11 rounded-xl bg-card hover:bg-accent hover:text-white transition-all duration-300">
          <FaDownload className="text-glow group-hover:text-white" size={18} />
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs bg-card text-text opacity-0 group-hover:opacity-100 shadow-glow pointer-events-none transition-all duration-300 transform group-hover:-translate-y-1">
            Download CV
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card" />
          </span>
        </a>
      </motion.aside>
    </div>
  )
}
