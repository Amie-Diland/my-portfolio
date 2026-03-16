import { motion } from 'framer-motion'
import { FaMobileAlt, FaPalette, FaChalkboardTeacher } from 'react-icons/fa'

const services = [
  { title: 'App Development', desc: 'Flutter apps with clean architecture', Icon: FaMobileAlt },
  { title: 'Design', desc: 'Photoshop designs and assets', Icon: FaPalette },
  { title: 'Mentoring', desc: 'Teaching and mentoring developers', Icon: FaChalkboardTeacher },
]

export default function Services() {
  const MotionDiv = motion.div
  return (
    <section id="services" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <MotionDiv
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="p-6 rounded-2xl bg-card ring-1 ring-glow/40 shadow-glow"
            >
              <s.Icon className="text-glow mb-3" size={28} />
              <div className="text-heading text-lg mb-1">{s.title}</div>
              <div className="text-slate-400 text-sm">{s.desc}</div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
