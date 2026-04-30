import { projects } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function CaseStudies() {
  const ref = useScrollReveal()

  // Get the first project which has detailed information
  const detailedProject = projects.find(p => p.details)

  return (
    <section id="case-studies" className="py-20 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            Case Studies
          </h2>
          <p className="text-muted text-lg">Detailed project breakdowns and solutions</p>
        </div>

        {/* Case Study */}
        {detailedProject && (
          <div
            ref={useScrollReveal()}
            className="rounded-xl bg-surface border border-border overflow-hidden hover:border-lime/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="p-8 border-b border-border bg-gradient-to-r from-surface to-surface2">
              <h3 className="text-2xl font-bold text-text-h mb-2">{detailedProject.title}</h3>
              <p className="text-muted mb-4">{detailedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {detailedProject.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-lime/10 text-lime border border-lime/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Details */}
              <div>
                <h4 className="text-lg font-bold text-text-h mb-4">Project Overview</h4>
                <p className="text-muted leading-relaxed mb-6">
                  {detailedProject.details.overview}
                </p>

                <h4 className="text-lg font-bold text-text-h mb-4">Frontend Implementation</h4>
                <p className="text-muted leading-relaxed mb-6">
                  {detailedProject.details.frontend}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-text-h mb-4">Backend & Database</h4>
                <p className="text-muted leading-relaxed mb-6">
                  {detailedProject.details.backend}
                </p>

                <h4 className="text-lg font-bold text-text-h mb-4">Database Design</h4>
                <p className="text-muted leading-relaxed mb-6">
                  {detailedProject.details.database}
                </p>

                <h4 className="text-lg font-bold text-text-h mb-4">Deployment</h4>
                <p className="text-muted leading-relaxed">
                  {detailedProject.details.deployment}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="px-8 py-6 border-t border-border bg-surface/50 flex flex-col md:flex-row gap-3">
              <a
                href={detailedProject.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded border border-border hover:border-cyan/50 
                  text-cyan text-center transition-colors text-sm font-mono"
              >
                View Repository
              </a>
              <a
                href={detailedProject.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded border border-border hover:border-lime/50
                  text-lime text-center transition-colors text-sm font-mono"
              >
                Live Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
