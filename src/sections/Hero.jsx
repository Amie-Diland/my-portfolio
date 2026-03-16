import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import profileImg from '../assets/profile/WhatsApp Image 2026-03-15 at 01.41.13.jpeg'

export default function Hero() {
  const MotionDiv = motion.div
  const MotionH1 = motion.h1
  const MotionP = motion.p
  const fullText = 'Software Engineer, App Developer, Photoshop Designer, and Teacher. Skilled with Flutter, Dart, HTML, SQL, CSS, PHP, with some C++.'
  const [typed, setTyped] = useState('')
  useEffect(() => {
    let i = 0
    const speed = 18
    const id = setInterval(() => {
      i += 1
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [])
  return (
    <section id="home" className="container pt-24 pb-16">
      <div className="glass p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <MotionDiv
            className="absolute inset-0 rounded-full ring-2 ring-glow/70 animate-spinSlow"
          />
          <MotionDiv
            className="absolute -inset-3 rounded-full blur-2xl opacity-40"
            style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,209,255,0.4), rgba(139,92,246,0.4), rgba(59,130,246,0.4), rgba(0,209,255,0.4))' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <MotionDiv
            animate={{ y: [0, -10, 0, -6, 0], rotate: [0, -3, 0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <img src={profileImg} alt="" className="w-44 h-44 rounded-full ring-2 ring-glow shadow-glow object-cover" />
          </MotionDiv>
        </MotionDiv>
        <div className="flex-1 text-left">
          <MotionH1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="heading text-4xl md:text-6xl mb-4">
            Hi, I’m <span className="gradient-text">AMIE DILAND</span>
          </MotionH1>
          <MotionP initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg md:text-xl text-slate-300 max-w-2xl min-h-[3.5rem]">
            {typed}
          </MotionP>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-accent text-white shadow-glow">View My Work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-card text-text ring-1 ring-glow">Contact Me</a>
          </div>
        </div>
        <MotionDiv
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(200px circle at center, rgba(0,209,255,0.6), transparent 70%)' }}
          animate={{ x: [0, -10, 10, 0], y: [0, 8, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
