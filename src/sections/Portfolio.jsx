import { motion } from 'framer-motion'

const items = [
  { title: 'E‑commerce Platform', status: 'Work Complete' },
  { title: 'Task Manager App', status: 'Work Complete' },
  { title: 'Weather Dashboard', status: 'Work Complete' },
  { title: 'Portfolio Redesign', status: 'Work Complete' },
  { title: 'Blog CMS', status: 'In Progress' },
  { title: 'Photoshop Designs', status: 'Work Complete' },
]

export default function Portfolio() {
  const MotionDiv = motion.div
  return (
    <section id="portfolio" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">My Portfolio</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MotionDiv key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden bg-card ring-1 ring-glow/40 shadow-glow">
              <div className="h-36 bg-gradient-to-br from-card to-bg" />
              <div className="p-4">
                <div className="text-sm text-slate-400">{item.status}</div>
                <div className="mt-1 text-lg text-heading">{item.title}</div>
                <div className="mt-3 flex gap-3">
                  <a href="#" className="text-accent">View</a>
                  <a href="#" className="text-accent2">Code</a>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
