import { useState } from 'react'
import { motion } from 'framer-motion'
import cvFile from '../assets/CV/NEW CV.docx?url'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const MotionForm = motion.form
  const [status, setStatus] = useState({ ok: false, text: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY
    const to = 'amiemaven9@gmail.com'
    const mailto = () => {
      const subject = encodeURIComponent(`Portfolio Contact - ${name}`)
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    }

    if (web3formsKey) {
      const fd = new FormData()
      fd.append('access_key', web3formsKey)
      fd.append('name', name)
      fd.append('email', email)
      fd.append('message', message)
      fd.append('from_name', name)
      fd.append('replyto', email)
      fd.append('subject', 'New Portfolio Contact')
      fd.append('to', to)
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
        .then(async (res) => {
          if (res.ok) {
            setStatus({ ok: true, text: 'Message sent successfully. Thank you!' })
            setName(''); setEmail(''); setMessage('')
          } else {
            mailto()
          }
        })
        .catch(() => mailto())
      return
    }

    if (formspreeId) {
      const fd = new FormData()
      fd.append('name', name)
      fd.append('email', email)
      fd.append('message', message)
      fetch(`https://formspree.io/f/${formspreeId}`, { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
        .then(async (res) => {
          if (res.ok) {
            setStatus({ ok: true, text: 'Message sent successfully. Thank you!' })
            setName(''); setEmail(''); setMessage('')
          } else {
            mailto()
          }
        })
        .catch(() => mailto())
      return
    }

    mailto()
  }

  return (
    <section id="contact" className="container pb-24">
      <div className="glass p-8 md:p-12">
        <h2 className="heading text-3xl mb-6 gradient-text">Contact Me</h2>
        <MotionForm initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full rounded-xl bg-card px-4 py-3 text-text ring-1 ring-glow/30 focus:outline-none" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" type="email" className="w-full rounded-xl bg-card px-4 py-3 text-text ring-1 ring-glow/30 focus:outline-none" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="md:col-span-2 w-full min-h-32 rounded-xl bg-card px-4 py-3 text-text ring-1 ring-glow/30 focus:outline-none" />
          <div className="md:col-span-2 flex gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-accent text-white shadow-glow">Send</button>
            <a href={cvFile} download className="px-5 py-3 rounded-xl bg-card text-text ring-1 ring-glow">Download CV</a>
          </div>
          {status.text ? (
            <div className="md:col-span-2 text-sm" style={{ color: status.ok ? '#22c55e' : '#eab308' }}>
              {status.text}
            </div>
          ) : null}
        </MotionForm>
      </div>
    </section>
  )
}
