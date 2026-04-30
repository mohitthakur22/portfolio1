import { useTyping } from './hooks/useTyping'
import { personal, typingRoles } from './data/portfolio'

const codeLines = [
  { indent: 0, parts: [{ c: 'keyword', t: 'const ' }, { c: 'fn', t: 'Developer' }, { c: 'muted', t: ' = () => {' }] },
  { indent: 1, parts: [{ c: 'keyword', t: 'const ' }, { c: 'default', t: '[skills] ' }, { c: 'muted', t: '= ' }, { c: 'fn', t: 'useState' }, { c: 'muted', t: '({' }] },
  { indent: 2, parts: [{ c: 'prop', t: 'core' }, { c: 'muted', t: ': ' }, { c: 'str', t: '"React.js"' }, { c: 'muted', t: ',' }] },
  { indent: 2, parts: [{ c: 'prop', t: 'style' }, { c: 'muted', t: ': ' }, { c: 'str', t: '"Tailwind"' }, { c: 'muted', t: ',' }] },
  { indent: 2, parts: [{ c: 'prop', t: 'api' }, { c: 'muted', t: ': ' }, { c: 'str', t: '"REST APIs"' }, { c: 'muted', t: ',' }] },
  { indent: 2, parts: [{ c: 'prop', t: 'years' }, { c: 'muted', t: ': ' }, { c: 'num', t: '3' }, { c: 'muted', t: ',' }] },
  { indent: 1, parts: [{ c: 'muted', t: '});' }] },
  { indent: 0, parts: [] },
  { indent: 1, parts: [{ c: 'keyword', t: 'return ' }, { c: 'muted', t: '(' }] },
  { indent: 2, parts: [{ c: 'tag', t: '<Engineer' }] },
  { indent: 3, parts: [{ c: 'attr', t: 'name' }, { c: 'muted', t: '=' }, { c: 'str', t: '"Mohit"' }] },
  { indent: 3, parts: [{ c: 'attr', t: 'location' }, { c: 'muted', t: '=' }, { c: 'str', t: '"Bangalore"' }] },
  { indent: 3, parts: [{ c: 'attr', t: 'open' }, { c: 'muted', t: '={' }, { c: 'num', t: 'true' }, { c: 'muted', t: '}' }] },
  { indent: 2, parts: [{ c: 'tag', t: '/>' }] },
  { indent: 1, parts: [{ c: 'muted', t: ')' }] },
  { indent: 0, parts: [{ c: 'muted', t: '}' }] },
]

const colorMap = {
  keyword: 'text-[#c792ea]',
  fn:      'text-[#82aaff]',
  str:     'text-lime',
  prop:    'text-cyan',
  num:     'text-orange',
  muted:   'text-muted2',
  tag:     'text-[#f07178]',
  attr:    'text-cyan',
  default: 'text-text',
}

export default function Hero() {
  const typed = useTyping(typingRoles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-28 pb-20 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(168,255,120,0.055) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(86,212,232,0.04) 0%, transparent 70%)', animation: 'float 9s ease-in-out infinite reverse' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Text */}
        <div className="flex-1 min-w-0">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[3px] uppercase text-lime mb-7
            opacity-0 animate-[fadeUp_0.6s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse-glow" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1 className="font-display font-black leading-[0.88] tracking-[-4px] mb-4
            text-[clamp(60px,10vw,128px)]
            opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]">
            Mohit<br />
            <span className="text-lime">Thakur</span>
            <span className="text-muted2">.</span>
          </h1>

          {/* Typing role */}
          <p className="font-mono text-[clamp(15px,2.2vw,22px)] text-muted mb-8
            opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]">
            <span className="text-cyan">{typed}</span>
            <span className="text-cyan animate-typing-bar">|</span>
          </p>

          {/* Description */}
          <p className="text-muted text-[15px] leading-[1.85] max-w-[500px] mb-12
            opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards]">
            3+ years crafting <span className="text-text font-medium">scalable React applications</span> — from
            startup products to enterprise systems at{' '}
            <span className="text-text font-medium">Wipro → HPE</span>.
            Azure AI certified · GitHub Copilot certified · Based in Bangalore.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4
            opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
            <a href="#projects" className="btn-lime">View My Work <span>↓</span></a>
            <a href={`mailto:${personal.email}`} className="btn-outline">Get In Touch <span>→</span></a>
          </div>
        </div>

        {/* Right — Code Block */}
        <div className="hidden lg:block w-[360px] flex-shrink-0
          opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.9s_forwards]">
          <div className="bg-surface2 border border-border rounded-2xl overflow-hidden
            shadow-[0_32px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border bg-surface">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[10px] text-muted2 ml-3 tracking-wide">Developer.jsx</span>
            </div>
            {/* Code lines */}
            <div className="p-6 font-mono text-[12.5px] leading-[1.85]">
              {codeLines.map((line, li) => (
                <div key={li} style={{ paddingLeft: line.indent * 16 }}>
                  {line.parts.length === 0
                    ? <span>&nbsp;</span>
                    : line.parts.map((part, pi) => (
                        <span key={pi} className={colorMap[part.c] || 'text-text'}>{part.t}</span>
                      ))
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        opacity-0 animate-[fadeUp_0.6s_cubic-bezier(0.16,1,0.3,1)_1.4s_forwards]">
        <span className="font-mono text-[9px] text-muted2 tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted2 to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
