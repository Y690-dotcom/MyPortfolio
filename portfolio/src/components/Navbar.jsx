import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-white"
        >
          PORTFOLIO<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Desktop */}
        <a
          href="/resume.pdf"
          download
          className="hidden rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 lg:block"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/newResume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Download Resume
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar