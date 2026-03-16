import Sidebar from './components/Sidebar.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import Chatbot from './components/Chatbot.jsx'
import Hero from './sections/Hero.jsx'
import WhyMe from './sections/WhyMe.jsx'
import Skills from './sections/Skills.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import Education from './sections/Education.jsx'
import Languages from './sections/Languages.jsx'
import Contact from './sections/Contact.jsx'
import cvFile from './assets/CV/NEW CV.docx?url'

export default function App() {
  return (
    <div>
      <BackgroundFX />
      <Sidebar />
      <Hero />
      <WhyMe />
      <Skills />
      <Services />
      <Portfolio />
      <Projects />
      <Education />
      <Languages />
      <Contact />
      <section id="download" className="container pb-24">
        <div className="glass p-8 md:p-12 flex items-center justify-between">
          <div className="text-slate-300">Always learning and improving.</div>
          <a href={cvFile} download className="px-5 py-3 rounded-xl bg-accent text-white shadow-glow">Download CV</a>
        </div>
      </section>
      <Chatbot />
    </div>
  )
}
