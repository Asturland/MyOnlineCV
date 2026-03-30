import React from 'react'
import fotoLinkedin from '../assets/Foto_LinkedIn.jpg';

/* SVG warehouse racks rendered as background atmosphere */
function WarehouseAtmosphere() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Perspective floor lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <line key={i}
          x1={600} y1={300}
          x2={i * 150} y2={600}
          stroke="#4fc3f7" strokeWidth="0.5" />
      ))}
      {/* Rack columns left */}
      {[60, 150, 240, 330].map((x, i) => (
        <g key={i}>
          <rect x={x} y={100} width={6} height={400} fill="#1e3a5f" />
          {[130, 200, 270, 340, 410].map((y, j) => (
            <rect key={j} x={x - 30} y={y} width={70} height={10} fill="#2a4f7c" />
          ))}
        </g>
      ))}
      {/* Rack columns right */}
      {[870, 960, 1050, 1140].map((x, i) => (
        <g key={i}>
          <rect x={x} y={100} width={6} height={400} fill="#1e3a5f" />
          {[130, 200, 270, 340, 410].map((y, j) => (
            <rect key={j} x={x - 30} y={y} width={70} height={10} fill="#2a4f7c" />
          ))}
        </g>
      ))}
      {/* Pallets on racks */}
      {[60, 150, 240, 330].flatMap((x, i) =>
        [130, 200, 270].map((y, j) => (
          <rect key={`${i}-${j}`} x={x - 26} y={y + 2} width={62} height={6} fill="#3b6ea5" rx="1" />
        ))
      )}
      {/* Overhead lights */}
      {[200, 400, 600, 800, 1000].map((x, i) => (
        <g key={i}>
          <rect x={x - 2} y={0} width={4} height={60} fill="#1e3a5f" />
          <ellipse cx={x} cy={65} rx={20} ry={8} fill="#4fc3f7" opacity="0.6" />
          <ellipse cx={x} cy={65} rx={60} ry={120} fill="#4fc3f7" opacity="0.03" />
        </g>
      ))}
      {/* Floor lane markers */}
      {[400, 500, 700, 800].map((x, i) => (
        <line key={i} x1={x} y1={300} x2={x} y2={600} stroke="#f59e0b" strokeWidth="1" strokeDasharray="20 15" opacity="0.3" />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden warehouse-hero grid-bg">
      <WarehouseAtmosphere />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/60 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-accent/60 shadow-[0_0_40px_rgba(79,195,247,0.3)]">
            <img
              src={fotoLinkedin} // Usamos la variable, no el string
              alt="Lucas Gutiérrez Prada"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online indicator */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-navy-900 animate-pulse-slow" />
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl tracking-widest text-white leading-none mb-3">
          LUCAS GUTIÉRREZ PRADA
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="flex-1 max-w-24 h-px bg-gradient-to-r from-transparent to-accent/60" />
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-accent">
            Senior WMS Project Lead &amp; Full Stack Developer
          </p>
          <span className="flex-1 max-w-24 h-px bg-gradient-to-l from-transparent to-accent/60" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['6+ Years Experience', 'WMS Specialist', 'International Projects', '.NET · Python · Oracle'].map(b => (
            <span key={b} className="skill-tag">{b}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#summary"
            className="px-8 py-3 bg-accent text-navy-900 font-sans font-bold tracking-wide rounded hover:bg-white transition-colors duration-200"
          >
            View Profile
          </a>
          <a
            href="mailto:ljpx@proton.me" target='blank'
            className="px-8 py-3 border border-steel-400 text-steel-300 font-sans font-medium tracking-wide rounded hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-xs tracking-widest uppercase text-steel-400">Scroll</span>
          <svg className="w-4 h-4 text-steel-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
