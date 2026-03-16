import { motion } from 'framer-motion'
import { FaHtml5, FaPhp, FaDatabase, FaPaintBrush, FaGraduationCap } from 'react-icons/fa'
import { SiFlutter, SiDart, SiCplusplus } from 'react-icons/si'

const skills = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 'Advanced' },
  { name: 'Dart', icon: SiDart, color: '#0175C2', level: 'Advanced' },
  { name: 'HTML/CSS', icon: FaHtml5, color: '#E34F26', level: 'Expert' },
  { name: 'SQL', icon: FaDatabase, color: '#336791', level: 'Intermediate' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4', level: 'Intermediate' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 'Basics' },
  { name: 'Photoshop', icon: FaPaintBrush, color: '#31A8FF', level: 'Advanced' },
  { name: 'Teaching', icon: FaGraduationCap, color: '#FFD700', level: 'Expert' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding container">
      <div className="text-center mb-16">
        <h2 className="heading text-4xl mb-4">Technical <span className="gradient-text">Expertise</span></h2>
        <p className="text-text max-w-2xl mx-auto">A comprehensive set of skills I've developed over years of learning and professional practice.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-card border border-white/5 hover:border-accent/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <s.icon size={24} style={{ color: s.color }} />
            </div>
            <h3 className="text-heading font-semibold text-lg mb-1">{s.name}</h3>
            <span className="text-xs font-mono text-accent uppercase tracking-wider">{s.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
