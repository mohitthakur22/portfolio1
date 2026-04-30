import { useScrollReveal } from './hooks/useScrollReveal'
import { experience } from './data/portfolio'

function ExpItem({ job, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal relative pl-10"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Dot */}
      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full z-10
        ring-[3px] ring-bg
        ${job.current
          ? 'bg-lime ring-offset-0 shadow-[0_0_10px_rgba(168,255,120,0.5)]'
          : 'bg-border2'
        }`}
      />

      <div className="bg-surface border border-border rounded-2xl p-8
        hover:border-border2 transition-all duration-300 group">

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="font-mono text-[11px] text-lime tracking-widest uppercase mb-2">
              {job.period}
              {job.current && (
                <span className="ml-3 bg-lime/10 border border-lime/30 text-lime px-2 py-0.5 rounded text-[9px]">
                  Current
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-[22px] md:text-[26px] mb-1">{job.role}</h3>
            <p className="text-cyan font-medium text-sm">{job.company} · <span className="text-muted">{job.client}</span></p>
          </div>
          <div className="font-mono text-[11px] text-muted2 tracking-wide">{job.location}</div>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 mb-6">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[13.5px] text-muted leading-[1.75]">
              <span className="text-lime text-[10px] mt-1.5 flex-shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {job.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] text-muted2 bg-surface2 border border-border px-3 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const titleRef = useScrollReveal()

  return (
    <section id="experience" className="bg-surface border-y border-border px-8 md:px-12 py-28">
      <div className="max-w-[1200px] mx-auto">
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-tag">Career</div>
          <h2 className="font-display font-black text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-2px]">
            Where I've <span className="text-lime">worked.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl relative">
          {/* Vertical line */}
          <div className="absolute left-[6px] top-4 bottom-0 w-px
            bg-gradient-to-b from-lime via-border2 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <ExpItem key={job.id} job={job} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
