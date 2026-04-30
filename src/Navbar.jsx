import { useState, useEffect } from 'react'
import { personal, resumeUrl } from './data/portfolio'
import { useTheme } from './context/ThemeContext'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Blog', 'Contact']

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      const scrollY  = window.scrollY + 120

      sections.forEach(sec => {
        if (!sec) return
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5
        transition-all duration-300
        ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <a href="#home" className="font-mono text-sm font-semibold text-lime tracking-wide">
        MT<span className="text-muted">.dev</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9">
        {links.map(link => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link.toLowerCase())}
              className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-200
                relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-lime
                after:transition-all after:duration-300
                ${active === link.toLowerCase()
                  ? 'text-lime after:w-full'
                  : 'text-muted hover:text-lime after:w-0 hover:after:w-full'
                }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href={resumeUrl}
          download="Mohit_Thakur_Resume.pdf"
          className="font-mono text-[11px] tracking-widest uppercase
            text-cyan border border-cyan/60 px-4 py-2 rounded transition-all duration-200
            hover:bg-cyan hover:text-bg"
          title="Download Resume"
        >
          Resume ↓
        </a>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border
            hover:border-lime/50 transition-colors duration-200"
          title="Toggle Dark Mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        <a
          href={`mailto:${personal.email}`}
          className="font-mono text-[11px] tracking-widest uppercase
            text-lime border border-lime/60 px-5 py-2 rounded transition-all duration-200
            hover:bg-lime hover:text-bg"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(m => !m)}
        className="md:hidden flex flex-col gap-1.5 p-1"
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 md:hidden">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="font-mono text-sm tracking-widest uppercase text-muted hover:text-lime text-left transition-colors"
            >
              {link}
            </button>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border">
            <a href={resumeUrl} download="Mohit_Thakur_Resume.pdf" className="btn-cyan flex-1 justify-center text-center">Resume</a>
            <button onClick={toggleTheme} className="px-3 py-2 rounded border border-border hover:bg-surface">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
          <a href={`mailto:${personal.email}`} className="btn-lime mt-2 w-full justify-center">Hire Me</a>
        </div>
      )}
    </nav>
  )
}
