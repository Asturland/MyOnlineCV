import React from 'react'

const stats = [
  { value: '6+',  label: 'Years of Experience' },
  { value: '3',   label: 'Continents Deployed' },
  { value: '100+', label: 'CRM Tickets Resolved' },
  { value: '∞',   label: 'Passion for Logistics' },
]

export default function Summary() {
  return (
    <section id="summary" className="py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label">Professional Summary</p>
            <h2 className="section-title">Turning Warehouse<br/>Chaos into<br/><span className="text-accent">Precision Systems</span></h2>
            <div className="space-y-4 text-steel-300 leading-relaxed">
              <p>
                Senior Software Project Lead with <strong className="text-white">6+ years of experience</strong> specializing in
                Warehouse Management Systems (WMS) and critical ERP integrations. Expert in managing the full
                project lifecycle for international clients across the <strong className="text-white">USA, EU, and LATAM</strong> regions.
                From initial functional analysis through to on-site commissioning.
              </p>
              <p>
                Proven track record in leading cross-functional development teams, enforcing clean-code standards through
                rigorous code reviews, and engineering complex logistical workflows optimized for
                <strong className="text-white"> high-availability production environments</strong>.
              </p>
              <p>
                Equally comfortable at a whiteboard designing system architecture, deep in a PL/SQL query tuning
                an Oracle schema, or on-site at a client warehouse in New Jersey debugging a live picking workflow
                under pressure.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="mailto:ljpx@proton.me" className="flex items-center gap-2 text-accent hover:text-white transition-colors font-mono text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                ljpx@proton.me
              </a>
              <a href="tel:+34650780392" className="flex items-center gap-2 text-steel-400 hover:text-accent transition-colors font-mono text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +34 650 780 392
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.label} className="card gradient-border text-center py-8">
                <div className="font-display text-5xl text-accent mb-2">{s.value}</div>
                <div className="font-mono text-xs text-steel-400 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
