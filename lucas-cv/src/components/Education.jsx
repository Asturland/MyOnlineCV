import React from 'react'

const items = [
  {
    degree: 'Expert Certified Master® JAVA-J2EE',
    institution: 'Alcalá University',
    period: '2019 – 2020',
    icon: '🎓',
    color: 'border-blue-500/40',
  },
  {
    degree: 'Higher Technician in Cross-Platform App Development',
    institution: 'IES Juan José Calvo Miguel',
    period: '2016 – 2018',
    icon: '💻',
    color: 'border-cyan-500/40',
  },
  {
    degree: 'Cambridge Assessment First Certificate (B2)',
    institution: 'Cambridge Assessment English',
    period: '2022',
    icon: '🇬🇧',
    color: 'border-amber-500/40',
    note: 'Certified English Proficiency',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="section-label">Academic Background</p>
            <h2 className="section-title">Education &amp;<br/><span className="text-accent">Certifications</span></h2>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className={`card border-l-2 ${item.color} hover:translate-x-1 transition-transform duration-200`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-sans font-semibold text-white text-sm leading-snug mb-1">{item.degree}</h3>
                      <p className="text-accent font-mono text-xs">{item.institution}</p>
                      <p className="text-steel-500 font-mono text-xs mt-0.5">{item.period}</p>
                      {item.note && <p className="text-steel-400 text-xs mt-1">{item.note}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages panel */}
          <div id="languages">
            <p className="section-label">Communication</p>
            <h2 className="section-title">Languages &amp;<br/><span className="text-accent">Availability</span></h2>

            <div className="space-y-4 mb-8">
              {/* Spanish */}
              <div className="card">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇪🇸</span>
                    <div>
                      <span className="font-sans font-semibold text-white">Spanish</span>
                      <span className="font-mono text-xs text-steel-400 ml-2">Native</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-accent">C2</span>
                </div>
                <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              {/* English */}
              <div className="card">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇬🇧</span>
                    <div>
                      <span className="font-sans font-semibold text-white">English</span>
                      <span className="font-mono text-xs text-steel-400 ml-2">Advanced</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-accent">C1</span>
                </div>
                <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '88%' }} />
                </div>
                <p className="text-steel-500 text-xs mt-2 font-mono">Preparing for Cambridge C1 Advanced (CAE)</p>
              </div>
            </div>

            {/* Availability badges */}
            <div className="card border-emerald-600/30">
              <h3 className="font-sans font-semibold text-white text-sm mb-4">Availability & Logistics</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '✈️', text: 'International Travel' },
                  { icon: '🚗', text: 'Full Driver\'s License' },
                  { icon: '🌐', text: 'Remote Support' },
                  { icon: '📅', text: 'Weekend On-Call' },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2 text-sm text-steel-300">
                    <span>{b.icon}</span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
