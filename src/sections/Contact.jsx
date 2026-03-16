import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import cvFile from '../assets/CV/NEW CV.docx?url'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ ok: false, text: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call for "professional" feel
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const to = 'amiemaven9@gmail.com'
    const subject = encodeURIComponent(`Portfolio Contact - ${name}`)
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    
    setStatus({ ok: true, text: 'Redirecting to your email client...' })
    setLoading(false)
  }

  return (
    <section id="contact" className="section-padding container">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="heading text-4xl mb-6">Let’s build something <br /><span className="gradient-text">extraordinary</span> together.</h2>
          <p className="text-text text-lg mb-12 max-w-md">I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <FaEnvelope size={20} />
              </div>
              <div>
                <div className="text-sm text-text mb-1 font-mono uppercase tracking-widest">Email Me</div>
                <div className="text-heading font-medium">amiemaven9@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent2">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <div className="text-sm text-text mb-1 font-mono uppercase tracking-widest">Location</div>
                <div className="text-heading font-medium">Available Worldwide (Remote)</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-[2.5rem] bg-card border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-text uppercase tracking-widest ml-1">Name</label>
                <input 
                  required
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="John Doe" 
                  className="w-full rounded-2xl bg-bg/50 px-6 py-4 text-heading border border-white/5 focus:border-accent/50 focus:outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-text uppercase tracking-widest ml-1">Email</label>
                <input 
                  required
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="john@example.com" 
                  className="w-full rounded-2xl bg-bg/50 px-6 py-4 text-heading border border-white/5 focus:border-accent/50 focus:outline-none transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-text uppercase tracking-widest ml-1">Message</label>
              <textarea 
                required
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Tell me about your project..." 
                className="w-full min-h-[160px] rounded-2xl bg-bg/50 px-6 py-4 text-heading border border-white/5 focus:border-accent/50 focus:outline-none transition-colors resize-none" 
              />
            </div>
            
            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-5 rounded-2xl bg-accent text-white font-bold shadow-lg shadow-accent/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane size={16} />
                </>
              )}
            </button>

            {status.text && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-medium text-green-400"
              >
                {status.text}
              </motion.p>
            )}
          </form>

          {/* Background Decorative Blob */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
