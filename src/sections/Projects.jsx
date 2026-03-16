import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import bankImg from '../assets/portfolio/portfolio.png'
import padiImg from '../assets/portfolio/PADI APP.png'
import malegadoImg from '../assets/portfolio/MAGADO APP.png'
import designsImg from '../assets/portfolio/LOGO DESIGN.png'

const projects = [
  { 
    title: 'Modern Bank App', 
    desc: 'A high-performance mobile banking application with real-time transactions and analytics.', 
    img: bankImg, 
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: '#' 
  },
  { 
    title: 'Padi Study App', 
    desc: 'An educational platform designed to streamline student learning and resource management.', 
    img: padiImg, 
    tags: ['Flutter', 'REST API', 'Provider'],
    link: '#' 
  },
  { 
    title: 'Malegado Language', 
    desc: 'Interactive language learning app with localized content and speech recognition.', 
    img: malegadoImg, 
    tags: ['Flutter', 'Dart', 'SQLite'],
    link: '#' 
  },
  { 
    title: 'Creative Visuals', 
    desc: 'Professional branding and identity design system for digital platforms.', 
    img: designsImg, 
    tags: ['Photoshop', 'Branding'],
    link: '#' 
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="heading text-4xl mb-4">Selected <span className="gradient-text">Works</span></h2>
          <p className="text-text max-w-xl">Each project represents a unique challenge solved through engineering and design thinking.</p>
        </div>
        <a href="#" className="text-accent hover:text-white transition-colors flex items-center gap-2 font-medium">
          View All Projects
          <FaExternalLinkAlt size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-card border border-white/5 mb-8">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex gap-4">
                  <a href={p.link} className="w-12 h-12 rounded-full bg-white text-bg flex items-center justify-center hover:scale-110 transition-transform">
                    <FaExternalLinkAlt size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 transition-transform border border-white/20">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-heading mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
            <p className="text-text leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
