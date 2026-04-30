import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import SkillsProficiency from './SkillsProficiency'
import Testimonials from './Testimonials'
import CaseStudies from './CaseStudies'
import GitHubStats from './GitHubStats'
import Blog from './Blog'
import Achievements from './Achievements'
import Contact from './Contact'
import Cursor from './Cursor'
import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <SkillsProficiency /> */}
      <Experience />
      <Projects />
      {/* <CaseStudies /> */}
      {/* <GitHubStats /> */}
      {/* <Testimonials /> */}
      {/* <Achievements /> */}
      {/* <Blog /> */}
      <Contact />
      
      {/* Simple footer */}
      <footer className="bg-bg border-t border-border px-8 md:px-12 py-8">
        <div className="max-w-[1200px] mx-auto text-center text-muted text-sm">
          <p>&copy; 2026 Mohit Thakur. Built with React & Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
