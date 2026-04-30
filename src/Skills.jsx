import { useScrollReveal } from './hooks/useScrollReveal'
import { skills } from './data/portfolio'

function SkillCard({ skill, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal bg-surface border border-border rounded-2xl p-7
        hover:border-border2 hover:-translate-y-1 transition-all duration-300
        group relative overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime to-cyan
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="text-3xl mb-4">{skill.icon}</div>
      <h3 className="font-display font-bold text-[15px] mb-5 text-text">{skill.category}</h3>

      <div className="flex flex-wrap gap-2">
        {skill.items.map(item => (
          <span
            key={item}
            className={
              skill.primary.includes(item)
                ? 'skill-pill-primary'
                : 'skill-pill'
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()

  return (
    <section id="skills" className="px-8 md:px-12 py-28">
      <div className="max-w-[1200px] mx-auto">
        <div ref={titleRef} className="reveal mb-14">
          <div className="section-tag">Tech Stack</div>
          <h2 className="font-display font-black text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-2px]">
            What I <span className="text-lime">work with.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
