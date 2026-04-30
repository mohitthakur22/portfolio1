import { testimonials } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            What Others Say
          </h2>
          <p className="text-muted text-lg">Feedback from colleagues and clients</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              ref={idx > 0 ? useScrollReveal() : undefined}
              className="group p-6 rounded-xl bg-surface border border-border hover:border-lime/50
                transition-all duration-300 hover:shadow-lg hover:shadow-lime/20"
            >
              {/* Quote Mark */}
              <div className="text-4xl text-lime/30 mb-4 leading-none">"</div>
              
              {/* Content */}
              <p className="text-muted mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{testimonial.image}</span>
                  <div>
                    <p className="text-sm font-semibold text-text-h">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
