import Sidebar from './components/Sidebar.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import Chatbot from './components/Chatbot.jsx'
import Hero from './sections/Hero.jsx'
import WhyMe from './sections/WhyMe.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import Education from './sections/Education.jsx'
import Languages from './sections/Languages.jsx'
import Contact from './sections/Contact.jsx'
import cvFile from './assets/CV/NEW CV.docx?url'

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <BackgroundFX />
      <Sidebar />
      <main>
        <Hero />
        <WhyMe />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
      
      <footer className="container pb-40 pt-10 text-center text-sm text-text/40 border-t border-white/5">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-white/10" />
            <span>Always learning and improving</span>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>
          <p>© 2026 AMIE DILAND. All rights reserved.</p>
        </div>
      </footer>
      
      <Chatbot />
    </div>
  )
}
