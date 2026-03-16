import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const qa = [
  { k: ['skill', 'skills', 'stack', 'tech'], a: 'My core skills: Flutter/Dart, HTML/CSS, SQL, PHP, C++, Photoshop, and Teaching. I focus on clean architecture and performance.' },
  { k: ['project', 'work', 'portfolio'], a: 'Notable projects: Bank App, Padi Study App, Malegado Language App, plus multiple Photoshop designs.' },
  { k: ['contact', 'email', 'reach'], a: 'Use the Contact section form or the Download CV to get my details. I’ll respond quickly.' },
  { k: ['service', 'services', 'offer'], a: 'I offer app development, design assets, and mentoring. I can help across the entire product lifecycle.' },
  { k: ['experience', 'why', 'hire'], a: 'I deliver fast and reliable solutions with attention to UX, performance, and maintainability. Clear communication is a priority.' },
]

function reply(q) {
  const text = q.toLowerCase()
  for (const { k, a } of qa) {
    if (k.some(w => text.includes(w))) return a
  }
  return "I’m here to help with skills, projects, services, or contact info. Ask about any of those!"
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hi! I’m your assistant. Ask me about my skills or projects.' }])
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])
  const MotionButton = motion.button
  const MotionDiv = motion.div

  const send = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input.trim() }
    const aiMsg = { role: 'ai', text: reply(input) }
    setMessages(m => [...m, userMsg, aiMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MotionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={() => setOpen(o => !o)} className="px-4 py-3 rounded-full bg-accent text-white shadow-glow">
        {open ? 'Close' : 'Ask AI'}
      </MotionButton>
      {open && (
        <MotionDiv initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 w-80 max-h-[60vh] rounded-2xl bg-card ring-1 ring-glow/40 shadow-glow flex flex-col">
          <div className="px-4 py-3 text-heading border-b border-glow/20">Assistant</div>
          <div className="flex-1 overflow-auto px-4 py-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role === 'ai' ? 'text-slate-300' : 'text-slate-200'} ${m.role === 'ai' ? '' : 'text-right'}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${m.role === 'ai' ? 'bg-[rgba(18,26,46,0.7)] ring-1 ring-glow/30' : 'bg-accent text-white'}`}>{m.text}</span>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-3 flex gap-2 border-t border-glow/20">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Ask about skills, projects..." className="flex-1 rounded-xl bg-card px-3 py-2 text-text ring-1 ring-glow/30 focus:outline-none" />
            <button onClick={send} className="px-3 py-2 rounded-xl bg-accent text-white">Send</button>
          </div>
        </MotionDiv>
      )}
    </div>
  )
}
