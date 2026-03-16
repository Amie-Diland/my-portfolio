import { motion } from 'framer-motion'
import { FaLanguage, FaGlobe } from 'react-icons/fa'

const langs = [
  { code: 'EN', name: 'English', level: 95, fluency: 'Native/Bilingual' },
  { code: 'FR', name: 'French', level: 60, fluency: 'Professional' },
  { code: 'ES', name: 'Spanish', level: 50, fluency: 'Conversational' },
  { code: 'DE', name: 'German', level: 40, fluency: 'Elementary' },
]

export default function Languages() {
  return (
    <section id="languages" className="section-padding container">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4 border border-accent/20">
          <FaGlobe size={12} />
          Communication
        </div>
        <h2 className="heading text-4xl mb-4">Linguistic <span className="gradient-text">Versatility</span></h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {langs.map((l, idx) => (
          <motion.div
            key={l.code}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-[2rem] bg-card border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-4xl font-bold text-white/5 group-hover:text-accent/20 transition-colors mb-4">{l.code}</div>
              <h3 className="text-xl font-bold text-heading mb-1">{l.name}</h3>
              <p className="text-sm text-text mb-6">{l.fluency}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-text/50">
                  <span>Proficiency</span>
                  <span>{l.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-accent to-accent2" 
                  />
                </div>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -top-4 -right-4 text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
              <FaLanguage size={120} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
