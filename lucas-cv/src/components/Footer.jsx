import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/60 bg-navy-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl tracking-widest text-white">LUCAS GUTIÉRREZ PRADA</p>
          <p className="font-mono text-xs text-steel-500 mt-1">Senior WMS Project Lead & Full Stack Developer</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="flex items-center gap-4">
            <a href="mailto:ljpx@proton.me" className="font-mono text-xs text-steel-400 hover:text-accent transition-colors">ljpx@proton.me</a>
            <span className="text-navy-600">·</span>
            <a href="tel:+34650780392" className="font-mono text-xs text-steel-400 hover:text-accent transition-colors">+34 650 780 392</a>
          </div>
          <p className="font-mono text-xs text-steel-600">Blimea, Asturias, Spain</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-navy-800 text-center">
        <p className="font-mono text-xs text-steel-600">
          My online CV — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
