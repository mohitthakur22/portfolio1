import { achievements } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            Achievements & Badges
          </h2>
          <p className="text-muted text-lg">Milestones and accomplishments</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              ref={idx > 0 ? useScrollReveal() : undefined}
              className="group relative p-6 rounded-xl bg-surface border border-border
                hover:border-lime/50 transition-all duration-300 text-center
                hover:shadow-lg hover:shadow-lime/20 cursor-pointer"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime/10 to-cyan/10
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {achievement.badge}
                </div>
                <h3 className="font-bold text-text-h mb-2 group-hover:text-lime transition-colors">
                  {achievement.label}
                </h3>
                <p className="text-xs text-muted">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
