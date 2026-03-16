import { motion } from 'framer-motion'

export default function BackgroundFX() {
  const MotionDiv = motion.div
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <MotionDiv
        className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(600px circle at center, rgba(0,209,255,0.5), transparent 60%)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="absolute top-1/3 -right-32 w-[540px] h-[540px] rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(600px circle at center, rgba(139,92,246,0.55), transparent 60%)' }}
        animate={{ x: [0, -25, 10, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(600px circle at center, rgba(59,130,246,0.55), transparent 60%)' }}
        animate={{ scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full opacity-20"
        style={{ border: '2px solid rgba(0,209,255,0.5)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <MotionDiv
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full opacity-25"
        style={{ border: '2px solid rgba(139,92,246,0.5)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <MotionDiv
        className="absolute bottom-24 right-1/4 w-[360px] h-[360px] rounded-full blur-2xl opacity-35"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,209,255,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3), rgba(0,209,255,0.3))' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
