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
import Footer from './Footer'
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
      <Footer />
    </>
  )
}

export default App
