import { useScrollReveal } from './hooks/useScrollReveal'
import { stats, certifications } from './data/portfolio'

export default function About() {
  const textRef  = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <section id="about" className="bg-surface border-y border-border px-8 md:px-12 py-28">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left – Text */}
          <div ref={textRef} className="reveal">
            <div className="section-tag">About Me</div>
            <h2 className="font-display font-black text-[clamp(36px,5vw,58px)] leading-[1.05]
              tracking-[-2px] mb-8">
              Full-Stack Developer<br />
              <span className="text-lime">crafting scalable web</span><br />
              applications.
            </h2>
            <div className="space-y-5 text-muted text-[15px] leading-[1.85]">
              <p>
                I'm a <span className="text-text font-medium">Full-Stack JavaScript Developer</span> with{' '}
                <span className="text-lime font-medium">3+ years</span> of hands-on experience building end-to-end web applications. 
                Proficient in React.js, Node.js, MongoDB, and modern JavaScript frameworks.
              </p>
              <p>
                My expertise spans <span className="text-text font-medium">frontend component architecture</span>,{' '}
                <span className="text-text font-medium">backend API development</span>, and{' '}
                <span className="text-text font-medium">database design</span>. I specialize in building scalable, production-ready applications with clean code and strong performance optimization.
              </p>
              <p>
                Currently working at <span className="text-text font-medium">Wipro</span> as a Project Engineer. 
                I'm passionate about delivering quality features in Agile environments and collaborating with cross-functional teams.{' '}
                <span className="text-lime">
                  Open to exciting full-stack roles across Bengaluru and remote opportunities.
                </span>
              </p>
            </div>
          </div>

          {/* Right – Stats */}
          <div ref={statsRef} className="reveal" style={{ transitionDelay: '0.15s' }}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border mb-px">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-surface2 px-6 py-7 text-center hover:bg-surface3 transition-colors duration-200"
                >
                  <div className="font-display font-black text-[44px] text-lime leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Certs */}
            <div className="bg-surface2 border border-border rounded-2xl p-5 space-y-3 mt-px">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted2 mb-4">
                Certifications
              </div>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface3
                    border border-border transition-colors duration-200"
                >
                  <span className="font-mono text-[9px] tracking-wider uppercase text-lime
                    bg-lime/10 border border-lime/30 px-2.5 py-1 rounded whitespace-nowrap">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[12px] text-muted">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
