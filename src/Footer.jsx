export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
        <p className="text-sm font-medium text-text">
          💼 Portfolio - Mohit Thakur
        </p>
        <p className="text-xs text-muted">
          © {currentYear} Mohit Thakur. All rights reserved. | Built with React & ❤️
        </p>
      </div>
    </footer>
  )
}
