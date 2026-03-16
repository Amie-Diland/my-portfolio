import { motion } from 'framer-motion'
import { FaMobileAlt, FaPalette, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa'

const services = [
  { 
    title: 'Mobile App Development', 
    desc: 'Native-feel cross-platform apps using Flutter. Focus on high performance, clean architecture, and seamless animations.', 
    Icon: FaMobileAlt,
    accent: 'text-blue-400',
    bg: 'bg-blue-400/5'
  },
  { 
    title: 'UI/UX & Asset Design', 
    desc: 'Professional digital assets and interface designs using Photoshop. Creating visual identities that resonate with users.', 
    Icon: FaPalette,
    accent: 'text-purple-400',
    bg: 'bg-purple-400/5'
  },
  { 
    title: 'Technical Mentoring', 
    desc: 'Helping aspiring developers master modern stacks through structured guidance and project-based learning.', 
    Icon: FaChalkboardTeacher,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400/5'
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding container">
      <div className="text-center mb-16">
        <h2 className="heading text-4xl mb-4">Core <span className="gradient-text">Offerings</span></h2>
        <p className="text-text max-w-xl mx-auto">Providing end-to-end digital solutions from conceptualization to deployment and mentoring.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 rounded-[2.5rem] bg-card border border-white/5 hover:border-white/10 transition-all flex flex-col h-full"
          >
            <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
              <s.Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4 leading-tight">{s.title}</h3>
            <p className="text-text leading-relaxed mb-8 flex-grow">{s.desc}</p>
            <a href="#contact" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-heading group-hover:text-accent transition-colors">
              Get Started
              <FaArrowRight size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
