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
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hi! I’m your AI assistant. How can I help you today?' }])
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  
  useEffect(() => { 
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' }) 
    }
  }, [messages, open])

  const send = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input.trim() }
    const aiMsg = { role: 'ai', text: reply(input) }
    setMessages(m => [...m, userMsg, aiMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-8 md:right-8">
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => setOpen(o => !o)} 
        className="w-14 h-14 rounded-2xl bg-accent text-white shadow-xl shadow-accent/20 flex items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </motion.button>

      {open && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          className="absolute bottom-20 right-0 w-[350px] h-[500px] rounded-[2rem] bg-card border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
        >
          <div className="px-6 py-5 bg-white/5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-heading font-bold">AI Assistant</span>
            </div>
          </div>

          <div className="flex-1 overflow-auto px-6 py-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'ai' 
                    ? 'bg-white/5 text-text rounded-tl-none border border-white/5' 
                    : 'bg-accent text-white rounded-tr-none shadow-lg shadow-accent/10'
                }`}>
                  {m.text}
                </div>
              </motion.div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && send()} 
                placeholder="Type a message..." 
                className="w-full rounded-xl bg-bg/50 px-5 py-3 text-sm text-heading border border-white/5 focus:border-accent/50 focus:outline-none transition-colors pr-12" 
              />
              <button 
                onClick={send} 
                className="absolute right-2 p-2 text-accent hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
