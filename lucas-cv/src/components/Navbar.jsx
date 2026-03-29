import React, { useState, useEffect } from 'react'

const links = [
  { href: '#summary',    label: 'Profile'     },
  { href: '#skills',     label: 'Skills'      },
  { href: '#experience', label: 'Experience'  },
  { href: '#education',  label: 'Education'   },
  { href: '#simulator',  label: 'Simulator'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-sm border-b border-navy-700/60 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display text-xl tracking-widest text-accent">LGP</span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ljpx@proton.me"
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-navy-900 transition-all duration-200 rounded"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-steel-300 hover:text-accent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900/98 border-t border-navy-700/60 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="mailto:ljpx@proton.me" className="nav-link text-accent">Contact</a>
        </div>
      )}
    </nav>
  )
}
