import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import profileImg from '../assets/profile/WhatsApp Image 2026-03-15 at 01.41.13.jpeg'

export default function Hero() {
  const fullText = 'Software Engineer, App Developer, Photoshop Designer, and Teacher.'
  const [typed, setTyped] = useState('')
  useEffect(() => {
    let i = 0
    const speed = 30
    const id = setInterval(() => {
      i += 1
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="container pt-32 pb-24 min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono mb-4 flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-accent" />
            <span>Available for new projects</span>
          </motion.div>
          <motion.h1 className="heading text-5xl md:text-7xl mb-6 font-bold leading-[1.1]">
            Creating digital <br />
            <span className="gradient-text">experiences</span> that matter.
          </motion.h1>
          <motion.p className="text-xl text-text max-w-xl mb-10 leading-relaxed min-h-[3rem]">
            I’m <span className="text-heading font-medium">AMIE DILAND</span>, a {typed}
            <span className="inline-block w-[2px] h-5 bg-accent ml-1 animate-pulse" />
          </motion.p>
          <div className="flex flex-wrap gap-5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-8 py-4 rounded-full bg-accent text-white font-medium shadow-lg shadow-accent/25 flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-heading font-medium transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
            />
            
            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-card shadow-2xl z-10 bg-card">
              <img
                src={profileImg}
                alt="AMIE DILAND"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full -z-10 animate-pulse" />

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-accent backdrop-blur-xl rounded-2xl border border-white/20 px-5 py-3 shadow-xl z-20"
            >
               <div className="text-center">
                  <div className="text-xl font-bold text-white leading-none">5+</div>
                  <div className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Years Exp</div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
