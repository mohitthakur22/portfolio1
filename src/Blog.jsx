import { blogPosts } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function Blog() {
  const ref = useScrollReveal()

  const categoryColors = {
    'React': 'text-cyan',
    'Backend': 'text-orange',
    'Database': 'text-lime',
  }

  return (
    <section id="blog" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            Latest Blog Posts
          </h2>
          <p className="text-muted text-lg">Technical insights and learning journey</p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <a
              key={post.id}
              href={post.link}
              ref={idx > 0 ? useScrollReveal() : undefined}
              className="group block p-6 rounded-xl bg-surface border border-border
                hover:border-lime/50 hover:bg-surface/80 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-mono tracking-widest uppercase ${categoryColors[post.category] || 'text-lime'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-h mb-2 group-hover:text-lime transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Date */}
                <div className="text-xs text-muted mt-4 md:mt-0 whitespace-nowrap">
                  {post.date}
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="mt-4 flex items-center gap-2 text-lime opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
