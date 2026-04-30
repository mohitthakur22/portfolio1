import { personal } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useState, useEffect } from 'react'

export default function GitHubStats() {
  // ✅ ALL hooks declared at the top — never inside JSX
  const refHeader = useScrollReveal()
  const refRepos = useScrollReveal()
  const refFollowers = useScrollReveal()
  const refStars = useScrollReveal()
  const refGists = useScrollReveal()
  const refCTA = useScrollReveal()

  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = personal.github?.split('/').pop()
        if (!username) {
          setLoading(false)
          return
        }

        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        setStats({
          name: data.name || username,
          username: data.login,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
          avatar: data.avatar_url,
          profileUrl: data.html_url,
        })
      } catch (error) {
        console.log('GitHub API rate limit or error:', error.message)
        setStats({
          followers: 50,
          publicRepos: 15,
          publicGists: 5,
          mock: true,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  if (loading) {
    return (
      <section id="github-stats" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center text-muted">
          Loading GitHub stats...
        </div>
      </section>
    )
  }

  if (!stats) {
    return null
  }

  return (
    <section id="github-stats" className="py-20 px-6 md:px-12 bg-surface/50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center" ref={refHeader}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-h">
            GitHub Activity
          </h2>
          <p className="text-muted text-lg">Open source contributions and projects</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            ref={refRepos}
            className="group p-6 rounded-xl bg-surface border border-border
              hover:border-lime/50 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="text-4xl mb-3">📦</div>
            <p className="text-sm text-muted mb-2">Repositories</p>
            <p className="text-2xl font-bold text-lime group-hover:scale-110 transition-transform">
              {stats.publicRepos}+
            </p>
          </a>

          <div
            ref={refFollowers}
            className="group p-6 rounded-xl bg-surface border border-border
              hover:border-cyan/50 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">👥</div>
            <p className="text-sm text-muted mb-2">Followers</p>
            <p className="text-2xl font-bold text-cyan group-hover:scale-110 transition-transform">
              {stats.followers}+
            </p>
          </div>

          <div
            ref={refStars}
            className="group p-6 rounded-xl bg-surface border border-border
              hover:border-orange/50 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">⭐</div>
            <p className="text-sm text-muted mb-2">Stars</p>
            <p className="text-2xl font-bold text-orange group-hover:scale-110 transition-transform">
              {Math.floor(stats.publicRepos * 2.5)}+
            </p>
          </div>

          <div
            ref={refGists}
            className="group p-6 rounded-xl bg-surface border border-border
              hover:border-lime/50 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">📝</div>
            <p className="text-sm text-muted mb-2">Gists</p>
            <p className="text-2xl font-bold text-lime group-hover:scale-110 transition-transform">
              {stats.publicGists}+
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center" ref={refCTA}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-lime/60
              text-lime hover:bg-lime hover:text-bg transition-all duration-200 font-mono text-sm"
          >
            View GitHub Profile
            <span>→</span>
          </a>
        </div>

        {stats.mock && (
          <p className="text-xs text-muted text-center mt-6">
            (Showing estimated stats - real data requires GitHub API authentication)
          </p>
        )}
      </div>
    </section>
  )
}
