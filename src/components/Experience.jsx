import React, { useState } from 'react'

const jobs = [
  {
    role: 'Senior WMS Project Lead & Developer',
    company: 'Mecalux Software Solutions',
    period: 'May 2019 – Present',
    type: 'Full-time',
    location: 'Spain · USA · Netherlands · Colombia',
    current: true,
    highlights: [
      {
        icon: '🌐',
        title: 'International Project Leadership',
        desc: 'Directing end-to-end WMS implementations for key US clients, including a major site restructuring in New Jersey (2025) involving live bug fixing and on-site client consulting.',
      },
      {
        icon: '⚡',
        title: 'Process Optimization',
        desc: 'Designed and deployed custom warehouse workflows including specialized container exit processes and tailored wave picking logic that measurably improved throughput.',
      },
      {
        icon: '🔍',
        title: 'Quality Assurance & Mentorship',
        desc: 'Responsible for code reviews to ensure optimal, scalable solutions (preventing redundancies and hardcoding) and coordinating development/QA tasks for team members.',
      },
      {
        icon: '✈️',
        title: 'International Commissioning',
        desc: 'Executed on-site startups and performance analysis in the Netherlands, Colombia, and across Spain — focusing on improving pick-per-hour metrics and ERP-WMS communication.',
      },
      {
        icon: '🎫',
        title: 'Incident Management',
        desc: 'Managing complex technical tickets via corporate CRM to maintain system stability and achieve high customer satisfaction scores across all accounts.',
      },
    ],
    stack: ['.NET (C#)', 'PL/SQL', 'LinQ', 'Oracle', 'Azure', '.BOO', 'SOAP/HTTPS', 'Jira', 'Git', '.YAML', '.XML', 'MySQL', 'PostgreSQL'],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Duro Felguera TI',
    period: 'April 2018 – July 2019',
    type: 'Full-time',
    location: 'Asturias, Spain',
    current: false,
    highlights: [
      {
        icon: '🔧',
        title: 'ERP Maintenance & Enhancement',
        desc: 'Maintained and streamlined proprietary ERP software, developing new modules to improve internal business logic and operational efficiency.',
      },
      {
        icon: '📝',
        title: 'Technical Consulting & Documentation',
        desc: 'Conducted technical consulting sessions with business stakeholders and produced comprehensive project documentation for engineering teams.',
      },
    ],
    stack: ['Java 5', 'Angular 4', '.NET (C#)', 'Jaspersoft', 'Ionic'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <section id="experience" className="py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">Career History</p>
        <h2 className="section-title">Professional<br/><span className="text-accent">Experience</span></h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex lg:flex-col gap-3">
              {jobs.map((j, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                    active === i
                      ? 'border-accent bg-navy-700 shadow-[0_0_20px_rgba(79,195,247,0.1)]'
                      : 'border-navy-600 bg-navy-800 hover:border-navy-500'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {j.current && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow flex-shrink-0" />
                    )}
                    <span className="font-mono text-xs text-steel-400 tracking-wider">{j.period}</span>
                  </div>
                  <p className="font-sans font-semibold text-white text-sm leading-snug">{j.role}</p>
                  <p className="font-mono text-xs text-accent mt-1">{j.company}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="flex-1">
            <div className="card border-navy-600">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-navy-600">
                <div>
                  <h3 className="font-sans font-bold text-xl text-white mb-1">{job.role}</h3>
                  <p className="text-accent font-semibold mb-1">{job.company}</p>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-steel-400">
                    <span>📅 {job.period}</span>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                  </div>
                </div>
                {job.current && (
                  <span className="px-3 py-1 bg-emerald-900/40 border border-emerald-600/50 text-emerald-400 rounded-full font-mono text-xs tracking-wider">
                    Current Role
                  </span>
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-5 mb-6">
                {job.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xl flex-shrink-0 mt-0.5">{h.icon}</span>
                    <div>
                      <h4 className="font-sans font-semibold text-white text-sm mb-1">{h.title}</h4>
                      <p className="text-steel-300 text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="pt-4 border-t border-navy-600">
                <p className="font-mono text-xs text-steel-500 tracking-wider uppercase mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map(t => (
                    <span key={t} className="skill-tag border-accent/40 text-accent">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
