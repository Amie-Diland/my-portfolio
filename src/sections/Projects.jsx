import { motion } from 'framer-motion'
import bankImg from '../assets/portfolio/portfolio.png'
import padiImg from '../assets/portfolio/PADI APP.png'
import malegadoImg from '../assets/portfolio/MAGADO APP.png'
import designsImg from '../assets/portfolio/LOGO DESIGN.png'

const projects = [
  { title: 'Bank App', desc: 'Modern mobile banking experience', img: bankImg, link: '#' },
  { title: 'Padi Study App', desc: 'Learning companion for students', img: padiImg, link: '#' },
  { title: 'Malegado Language App', desc: 'Language learning platform', img: malegadoImg, link: '#' },
  { title: 'Photoshop Designs', desc: 'Creative visuals and edits', img: designsImg, link: '#' },
]

export default function Projects() {
  const MotionA = motion.a
  return (
    <section id="projects" className="container pb-16">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <MotionA
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-card ring-1 ring-glow/40 shadow-glow group"
            >
              <div className="h-40 bg-card">
                {p.img ? (
                  <img src={p.img} alt="" className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition" />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-card to-bg" />
                )}
              </div>
              <div className="p-4">
                <div className="text-heading text-lg">{p.title}</div>
                <div className="text-slate-400 text-sm">{p.desc}</div>
              </div>
            </MotionA>
          ))}
        </div>
      </div>
    </section>
  )
}
