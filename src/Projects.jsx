import { useScrollReveal } from './hooks/useScrollReveal'
import { projects } from './data/portfolio'

export default function Projects() {
  const titleRef = useScrollReveal()
  const cardRefs = projects.map(() => useScrollReveal())

  return (
    <section id="projects" className="px-8 md:px-12 py-28">
      <div className="max-w-[1200px] mx-auto">
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-tag">Portfolio</div>
          <h2 className="font-display font-black text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-2px]">
            Projects I've <span className="text-lime">built.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={cardRefs[i]}
              className="reveal group bg-surface border border-border rounded-3xl p-8 md:p-10
                hover:border-lime/50 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-display font-bold text-[28px] md:text-[32px] mb-2 text-text">
                    {project.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-[1.75] max-w-[600px]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              {project.details && (
                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  {project.details.frontend && (
                    <div>
                      <h4 className="font-mono text-[11px] tracking-widest uppercase text-lime mb-2">
                        Frontend
                      </h4>
                      <p className="text-muted text-[13px] leading-[1.75]">
                        {project.details.frontend}
                      </p>
                    </div>
                  )}
                  {project.details.backend && (
                    <div>
                      <h4 className="font-mono text-[11px] tracking-widest uppercase text-lime mb-2">
                        Backend
                      </h4>
                      <p className="text-muted text-[13px] leading-[1.75]">
                        {project.details.backend}
                      </p>
                    </div>
                  )}
                  {project.details.database && (
                    <div>
                      <h4 className="font-mono text-[11px] tracking-widest uppercase text-lime mb-2">
                        Database
                      </h4>
                      <p className="text-muted text-[13px] leading-[1.75]">
                        {project.details.database}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted2 bg-surface2 border border-border px-3 py-1.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-lime border border-lime/30 px-4 py-2 rounded
                      hover:bg-lime/10 transition-colors duration-200"
                  >
                    GitHub →
                  </a>
                )}
                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-cyan border border-cyan/30 px-4 py-2 rounded
                      hover:bg-cyan/10 transition-colors duration-200"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
