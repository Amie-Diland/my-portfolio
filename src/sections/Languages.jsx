import { motion } from 'framer-motion'

const langs = [
  { code: 'EN', name: 'English', level: 95 },
  { code: 'FR', name: 'French', level: 60 },
  { code: 'ES', name: 'Spanish', level: 50 },
  { code: 'DE', name: 'German', level: 40 },
]

export default function Languages() {
  const MotionDiv = motion.div
  return (
    <section id="languages" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">Languages</h2>
        <div className="space-y-6">
          {langs.map((l) => (
            <MotionDiv key={l.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded-md bg-card ring-1 ring-glow/30">{l.code}</span>
                  <span className="text-slate-300">{l.name}</span>
                </div>
                <span className="text-slate-400">{l.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-card">
                <div className="h-3 rounded-full bg-gradient-to-r from-glow via-accent2 to-accent" style={{ width: `${l.level}%` }} />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
