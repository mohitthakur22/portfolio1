import { personal } from './data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="bg-surface border-t border-border px-8 md:px-12 py-28">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="mb-8">
          <div className="section-tag justify-center flex">Get in Touch</div>
          <h2 className="font-display font-black text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-2px]">
            Let's build something <span className="text-lime">amazing.</span>
          </h2>
          <p className="text-muted text-[15px] leading-[1.85] max-w-[600px] mx-auto mt-6">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-[700px] mx-auto">
          <a
            href={`mailto:${personal.email}`}
            className="bg-surface2 border border-border rounded-2xl p-6 hover:border-lime/50
              transition-all duration-300 group"
          >
            <div className="font-mono text-[11px] tracking-widest uppercase text-lime mb-2">
              Email
            </div>
            <div className="font-display font-bold text-[18px] text-text group-hover:text-lime transition-colors">
              {personal.email}
            </div>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface2 border border-border rounded-2xl p-6 hover:border-cyan/50
              transition-all duration-300 group"
          >
            <div className="font-mono text-[11px] tracking-widest uppercase text-cyan mb-2">
              LinkedIn
            </div>
            <div className="font-display font-bold text-[18px] text-text group-hover:text-cyan transition-colors">
              @mohit-thakur
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
              hover:bg-surface2 hover:border-lime/50 transition-all duration-300 group"
            title="GitHub"
          >
            <span className="text-lime opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
              hover:bg-surface2 hover:border-cyan/50 transition-all duration-300 group"
            title="LinkedIn"
          >
            <span className="text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
              hover:bg-surface2 hover:border-orange/50 transition-all duration-300 group"
            title="Email"
          >
            <span className="text-orange opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </a>
        </div>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-bg font-display font-bold
            rounded-xl hover:bg-lime/90 transition-all duration-300 hover:scale-105"
        >
          Send me an email
          <span>→</span>
        </a>
      </div>
    </section>
  )
}
