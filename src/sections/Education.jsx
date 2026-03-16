import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'

const education = [
  { 
    title: 'Bachelor of Computer Science', 
    org: 'State University', 
    year: '2019 - 2023',
    desc: 'Focused on Software Engineering and Database Management.'
  },
  { 
    title: 'Mobile App Development', 
    org: 'Tech Academy', 
    year: '2020',
    desc: 'Intensive training on Flutter and cross-platform architecture.'
  },
]

const certs = [
  { title: 'Google Cloud Professional', year: '2022', issuer: 'Google' },
  { title: 'PHP Professional Developer', year: '2021', issuer: 'Zend' },
  { title: 'UI/UX Design Specialist', year: '2020', issuer: 'Coursera' },
]

export default function Education() {
  return (
    <section id="education" className="section-padding container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <FaGraduationCap size={24} />
            </div>
            <h2 className="heading text-4xl">Education</h2>
          </div>
          
          <div className="space-y-12 border-l border-white/5 ml-6 pl-10 relative">
            {education.map((e, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[53px] top-0 w-6 h-6 rounded-full bg-bg border-4 border-accent" />
                <div className="flex items-center gap-2 text-accent font-mono text-sm mb-2">
                  <FaCalendarAlt size={12} />
                  {e.year}
                </div>
                <h3 className="text-2xl font-bold text-heading mb-2">{e.title}</h3>
                <div className="text-white/60 font-medium mb-3">{e.org}</div>
                <p className="text-text">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-accent2/10 flex items-center justify-center text-accent2">
              <FaCertificate size={24} />
            </div>
            <h2 className="heading text-4xl">Certifications</h2>
          </div>

          <div className="grid gap-6">
            {certs.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-card border border-white/5 hover:border-accent2/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-accent2 transition-colors">{c.title}</h3>
                  <div className="text-sm text-text">{c.issuer} • {c.year}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaExternalLinkAlt size={14} className="text-accent2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
