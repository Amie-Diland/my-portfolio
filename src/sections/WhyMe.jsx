import { motion } from 'framer-motion'
import { FaRocket, FaDraftingCompass, FaHandshake } from 'react-icons/fa'

const reasons = [
  { 
    title: 'Fast Delivery', 
    desc: 'Optimized workflows ensuring high-quality results in record time.', 
    icon: FaRocket, 
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  { 
    title: 'Precision Design', 
    desc: 'Meticulous attention to detail in every pixel and line of code.', 
    icon: FaDraftingCompass, 
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  { 
    title: 'Partnership', 
    desc: 'Proactive communication and long-term support for your vision.', 
    icon: FaHandshake, 
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
]

export default function WhyMe() {
  return (
    <section id="whyme" className="section-padding container">
      <div className="grid lg:grid-cols-3 gap-8">
        {reasons.map((r, idx) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-card border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className={`w-16 h-16 rounded-2xl ${r.bg} ${r.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
              <r.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">{r.title}</h3>
            <p className="text-text leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
