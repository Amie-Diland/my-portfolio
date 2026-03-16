import { motion } from 'framer-motion'

const education = [
  { title: 'Bachelor of Computer Science', org: 'University', year: '2019' },
  { title: 'Mobile App Development', org: 'Bootcamp', year: '2020' },
]

const certs = [
  { title: 'Google Cloud', year: '2022' },
  { title: 'PHP Professional', year: '2021' },
  { title: 'UI/UX Certificate', year: '2020' },
]

export default function Education() {
  const MotionDiv = motion.div
  return (
    <section id="education" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-slate-300 mb-3">Education</div>
            <div className="space-y-4">
              {education.map((e) => (
                <MotionDiv key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded-xl bg-card ring-1 ring-glow/30">
                  <div className="text-heading">{e.title}</div>
                  <div className="text-slate-400">{e.org}</div>
                  <div className="text-slate-500 text-sm">{e.year}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-300 mb-3">Certifications</div>
            <div className="space-y-4">
              {certs.map((c) => (
                <MotionDiv key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded-xl bg-card ring-1 ring-glow/30">
                  <div className="text-heading">{c.title}</div>
                  <div className="text-slate-500 text-sm">{c.year}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
