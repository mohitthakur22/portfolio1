import { skillsProficiency } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function SkillsProficiency() {
  const ref = useScrollReveal()

  return (
    <section id="skills-proficiency" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            Skill Proficiency
          </h2>
          <p className="text-muted text-lg">Technical expertise breakdown</p>
        </div>

        {/* Skills Progress Bars */}
        <div className="space-y-8">
          {skillsProficiency.map((skill, idx) => (
            <div key={skill.skill} ref={idx > 0 ? useScrollReveal() : undefined}>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-text-h">{skill.skill}</span>
                </div>
                <span className="text-sm font-mono text-lime">{skill.proficiency}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-surface rounded-full overflow-hidden border border-border">
                <div
                  className="h-full bg-gradient-to-r from-lime via-cyan to-orange rounded-full
                    transition-all duration-700 ease-out"
                  style={{
                    width: `${skill.proficiency}%`,
                    animation: `slideIn 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes slideIn {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
