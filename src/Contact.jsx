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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-text group-hover:text-lime transition-colors"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.11-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.305-.535-1.52.115-3.17 0 0 1.005-.32 3.3 1.23.955-.265 1.98-.398 3-.405 1.02.007 2.045.14 3 .405 2.285-1.55 3.29-1.23 3.29-1.23.655 1.65.245 2.865.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.9-.015 3.295 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
              hover:bg-surface2 hover:border-cyan/50 transition-all duration-300 group"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-text group-hover:text-cyan transition-colors"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554V14.82c0-1.335-.027-3.053-1.862-3.053-1.864 0-2.15 1.454-2.15 2.958v5.726H9.33V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.369-1.848 3.605 0 4.271 2.372 4.271 5.456v6.283zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .783 0 1.75v20.5C0 23.217.792 24 1.771 24h20.451C23.208 24 24 23.217 24 22.25V1.75C24 .783 23.208 0 22.225 0z"/>
            </svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
              hover:bg-surface2 hover:border-orange/50 transition-all duration-300 group"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-text group-hover:text-orange transition-colors"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
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
