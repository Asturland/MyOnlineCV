import React from 'react'

const skillGroups = [
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500/20 to-navy-800',
    skills: ['.NET (C#)', 'PL/SQL (Oracle)', 'Java', 'Python', '.BOO', 'LINQ'],
  },
  {
    label: 'Frontend',
    icon: '🖥️',
    color: 'from-cyan-500/20 to-navy-800',
    skills: ['Angular', 'TypeScript', 'React', 'HTML/CSS', 'Python (GUI)'],
  },
  {
    label: 'Infrastructure & DevOps',
    icon: '☁️',
    color: 'from-indigo-500/20 to-navy-800',
    skills: ['Azure', 'GIT / SourceTree', 'SOAP / HTTPS', 'Server Config'],
  },
  {
    label: 'Project Management',
    icon: '📋',
    color: 'from-teal-500/20 to-navy-800',
    skills: ['Functional Analysis', 'CRM Incident Mgmt', 'Technical Leadership', 'Code Review', 'Clean Code', 'QA Coordination'],
  },
  {
    label: 'WMS Domain Expertise',
    icon: '🏭',
    color: 'from-amber-500/20 to-navy-800',
    skills: ['Wave Picking Logic', 'ERP-WMS Integration', 'Container Workflows', 'Dock Scheduling', 'KPI Optimization', 'On-site Commissioning', 'All general WMS processes and best practices'],
  },
  {
    label: 'Reporting & Tools',
    icon: '📊',
    color: 'from-rose-500/20 to-navy-800',
    skills: ['Jaspersoft', 'Oracle SQL Developer', 'Postman', 'SoapUI'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label text-center">Core Competencies</p>
        <h2 className="section-title text-center">Technical Arsenal</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div
              key={group.label}
              className={`card bg-gradient-to-br ${group.color} hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-sans font-semibold text-white text-sm tracking-wide">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
