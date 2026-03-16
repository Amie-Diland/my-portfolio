import { motion } from 'framer-motion'

const skills = [
  { name: 'Flutter/Dart', value: 90 },
  { name: 'HTML/CSS', value: 95 },
  { name: 'SQL', value: 80 },
  { name: 'PHP', value: 75 },
  { name: 'C++', value: 40 },
  { name: 'Photoshop', value: 88 },
  { name: 'Teaching', value: 85 },
]

export default function Skills() {
  const MotionDiv = motion.div
  return (
    <section id="skills" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <MotionDiv key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">{s.name}</span>
                <span className="text-slate-400">{s.value}%</span>
              </div>
              <div className="h-3 rounded-full bg-card">
                <div className="h-3 rounded-full bg-gradient-to-r from-glow via-accent2 to-accent" style={{ width: `${s.value}%` }} />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
