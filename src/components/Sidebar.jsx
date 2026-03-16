import { FaHome, FaCode, FaImages, FaUserGraduate, FaLanguage, FaDownload, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import cvFile from '../assets/CV/NEW CV.docx?url'

const items = [
  { id: 'home', icon: FaHome, label: 'Home' },
  { id: 'skills', icon: FaCode, label: 'Skills' },
  { id: 'portfolio', icon: FaImages, label: 'Portfolio' },
  { id: 'projects', icon: FaBriefcase, label: 'Projects' },
  { id: 'education', icon: FaUserGraduate, label: 'Education' },
  { id: 'languages', icon: FaLanguage, label: 'Languages' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
]

export default function Sidebar() {
  const MotionAside = motion.aside
  return (
    <MotionAside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-4 top-[45%] -translate-y-1/2 z-50 flex flex-col gap-3 p-3 glass"
    >
      {items.map((it) => {
        const IconComp = it.icon
        return (
          <a key={it.id} href={`#${it.id}`} className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-card hover:shadow-glow transition">
            <IconComp className="text-glow" size={18} />
            <span className="absolute left-14 whitespace-nowrap rounded-lg px-2 py-1 text-xs bg-card text-text opacity-0 group-hover:opacity-100 shadow-glow">
              {it.label}
            </span>
          </a>
        )
      })}
      <a href={cvFile} download className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-card hover:shadow-glow transition">
        <FaDownload className="text-glow" size={18} />
        <span className="absolute left-14 whitespace-nowrap rounded-lg px-2 py-1 text-xs bg-card text-text opacity-0 group-hover:opacity-100 shadow-glow">
          Download CV
        </span>
      </a>
    </MotionAside>
  )
}
