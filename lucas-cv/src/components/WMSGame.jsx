import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────
   LAYOUT CONSTANTS (viewBox 480 × 320)
   ───────────────────────────────────────── */
const VW = 480
const VH = 320

// Key positions [cx, cy] inside SVG viewBox
const FORKLIFT_HOME = { x: 240, y: 240 }
const RACK_SLOT     = { x: 110, y: 130 }
const DOCK_SLOT     = { x: 390, y: 240 }
const PACK_SLOT     = { x: 240, y: 80  }

const ACTIONS = {
  locate: {
    id: 'locate',
    label: 'Locate Container',
    emoji: '📦',
    color: '#2563eb',
    colorHover: '#1d4ed8',
    target: RACK_SLOT,
    message: 'Passionate about AI & WMS',
    messageIcon: '🤖',
  },
  ship: {
    id: 'ship',
    label: 'Ship Container',
    emoji: '🚢',
    color: '#dc2626',
    colorHover: '#b91c1c',
    target: DOCK_SLOT,
    message: 'Seeking constant personal & professional improvement',
    messageIcon: '🚀',
  },
  pack: {
    id: 'pack',
    label: 'Pack Container',
    emoji: '📫',
    color: '#16a34a',
    colorHover: '#15803d',
    target: PACK_SLOT,
    message: 'Daily contact with customers',
    messageIcon: '🤝',
  },
}

/* ─────────────────────────────────────────
   SVG SUB-COMPONENTS
   ───────────────────────────────────────── */

function Floor() {
  return (
    <>
      {/* Base floor */}
      <rect x="0" y="0" width={VW} height={VH} fill="#0d1b2a" />
      {/* Floor grid */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2={VH} stroke="#1e3a5f" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2={VW} y2={i * 40} stroke="#1e3a5f" strokeWidth="0.5" />
      ))}
      {/* Aisle lane markers */}
      <line x1="175" y1="0" x2="175" y2={VH} stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="12 8" opacity="0.5" />
      <line x1="305" y1="0" x2="305" y2={VH} stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="12 8" opacity="0.5" />
    </>
  )
}

function RackSection() {
  // Left rack block: top-left area
  const rows = [100, 130, 160]
  const cols = [40, 90, 140]
  return (
    <g>
      <text x="90" y="88" fill="#4fc3f7" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.8">RACK A</text>
      {cols.map(cx =>
        rows.map(cy => (
          <g key={`${cx}-${cy}`}>
            <rect x={cx - 22} y={cy - 14} width={44} height={22} rx="2" fill="#1b2d45" stroke="#2a4f7c" strokeWidth="0.8" />
            <rect x={cx - 19} y={cy - 11} width={38} height={8} rx="1" fill="#243f63" />
            <rect x={cx - 12} y={cy - 4} width={24} height={5} rx="1" fill="#8B7355" opacity="0.7" />
          </g>
        ))
      )}
    </g>
  )
}

function DockSection() {
  return (
    <g>
      <rect x="350" y="200" width="100" height="80" rx="4" fill="#1b2d45" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="400" y="248" fill="#dc2626" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.9">DOCK</text>
      <text x="400" y="260" fill="#dc2626" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">LOADING</text>
      {/* Dock bumpers */}
      {[210, 230, 250, 270].map(y => (
        <rect key={y} x="448" y={y} width="6" height="6" rx="1" fill="#dc2626" opacity="0.5" />
      ))}
    </g>
  )
}

function PackStation() {
  return (
    <g>
      <rect x="195" y="48" width="90" height="54" rx="4" fill="#1b2d45" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="205" y="56" width="70" height="16" rx="2" fill="#0f3020" />
      <text x="240" y="67" fill="#16a34a" fontSize="8" fontFamily="monospace" textAnchor="middle">PACK STATION</text>
      {/* Conveyor lines */}
      {[78, 84, 90].map(y => (
        <line key={y} x1="200" y1={y} x2="280" y2={y} stroke="#16a34a" strokeWidth="0.5" opacity="0.4" />
      ))}
    </g>
  )
}

/* Forklift SVG — top-down view */
function ForkliftSVG({ color = '#4fc3f7', forksUp }) {
  return (
    <g>
      {/* Body */}
      <rect x="-16" y="-20" width="32" height="36" rx="4" fill={color} opacity="0.95" />
      {/* Cab roof */}
      <rect x="-10" y="-16" width="20" height="16" rx="2" fill="rgba(0,0,0,0.3)" />
      {/* Rear counterweight */}
      <rect x="-12" y="14" width="24" height="8" rx="3" fill="rgba(0,0,0,0.35)" />
      {/* Wheels */}
      <circle cx="-14" cy="-12" r="4" fill="#1a1a2e" stroke="#666" strokeWidth="0.5" />
      <circle cx="14" cy="-12" r="4" fill="#1a1a2e" stroke="#666" strokeWidth="0.5" />
      <circle cx="-14" cy="16" r="4" fill="#1a1a2e" stroke="#666" strokeWidth="0.5" />
      <circle cx="14" cy="16" r="4" fill="#1a1a2e" stroke="#666" strokeWidth="0.5" />
      {/* Mast */}
      <rect x="-14" y="-28" width="4" height="16" rx="1" fill={color} opacity="0.8" />
      <rect x="10" y="-28" width="4" height="16" rx="1" fill={color} opacity="0.8" />
      {/* Forks */}
      <motion.g
        animate={{ y: forksUp ? -6 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <rect x="-14" y="-32" width="3" height="14" rx="1" fill="#fbbf24" />
        <rect x="11" y="-32" width="3" height="14" rx="1" fill="#fbbf24" />
      </motion.g>
      {/* Warning stripe */}
      <rect x="-8" y="8" width="16" height="4" rx="1" fill="#fbbf24" opacity="0.7" />
    </g>
  )
}

/* Pallet on forks */
function PalletOnForks() {
  return (
    <g>
      <rect x="-10" y="-44" width="20" height="14" rx="1" fill="#8B7355" />
      <rect x="-8" y="-42" width="16" height="3" rx="1" fill="#A0855A" />
      <rect x="-8" y="-35" width="16" height="3" rx="1" fill="#A0855A" />
    </g>
  )
}

/* Hand pointer SVG that simulates a tap */
function HandPointer({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute pointer-events-none"
          style={{ bottom: '24px', right: '24px' }}
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 0.95, 0.8], rotate: [-20, 0, -5, 0] }}
          transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1] }}
        >
          <span style={{ fontSize: '32px' }}>👆</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────
   MAIN GAME COMPONENT
   ───────────────────────────────────────── */
export default function WMSGame() {
  const [phase, setPhase] = useState('idle') // idle | moving | done | resetting
  const [activeAction, setActiveAction] = useState(null)
  const [showHand, setShowHand] = useState(false)
  const [hasPallet, setHasPallet] = useState(false)
  const [forksUp, setForksUp] = useState(false)

  const handleAction = useCallback((actionId) => {
    if (phase !== 'idle') return
    const action = ACTIONS[actionId]

    setActiveAction(action)
    setShowHand(true)
    setPhase('moving')
    setForksUp(true)
    setHasPallet(true)

    setTimeout(() => setShowHand(false), 1400)

    // After animation reaches target, show message
    setTimeout(() => {
      setPhase('done')
      setForksUp(false)
      setHasPallet(false)
    }, 2200)
  }, [phase])

  const handleDismiss = useCallback(() => {
    setPhase('resetting')
    // animate back to home
    setTimeout(() => {
      setPhase('idle')
      setActiveAction(null)
    }, 1600)
  }, [])

  const currentTarget = activeAction?.target ?? FORKLIFT_HOME
  const forkPos = phase === 'idle' || phase === 'resetting'
    ? FORKLIFT_HOME
    : currentTarget

  const spring = { type: 'spring', stiffness: 60, damping: 18, mass: 1 }
  const resetSpring = { type: 'spring', stiffness: 80, damping: 20, mass: 0.8 }

  return (
    <section id="simulator" className="py-24 grid-bg bg-navy-900/80">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label text-center">Interactive Demo</p>
        <h2 className="section-title text-center">
          WMS <span className="text-accent">Simulator</span>
        </h2>
        <p className="text-center text-steel-400 font-mono text-sm mb-12 tracking-wide">
          Tap an operation on the tablet to dispatch the forklift
        </p>

        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-stretch justify-center">

          {/* ── Warehouse SVG viewport ── */}
          <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden border border-navy-600 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
               style={{ aspectRatio: `${VW}/${VH}` }}>
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <Floor />
              <RackSection />
              <DockSection />
              <PackStation />

              {/* Labels */}
              <text x="240" y="268" fill="#4fc3f7" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">MAIN AISLE</text>

              {/* Home marker */}
              <circle cx={FORKLIFT_HOME.x} cy={FORKLIFT_HOME.y} r="18" fill="none" stroke="#4fc3f7" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4" />
              <text x={FORKLIFT_HOME.x} y={FORKLIFT_HOME.y + 28} fill="#4fc3f7" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.5">HOME</text>

              {/* Forklift with framer-motion */}
              <motion.g
                animate={{
                  x: phase === 'idle' ? FORKLIFT_HOME.x : (phase === 'resetting' ? FORKLIFT_HOME.x : forkPos.x),
                  y: phase === 'idle' ? FORKLIFT_HOME.y : (phase === 'resetting' ? FORKLIFT_HOME.y : forkPos.y),
                }}
                initial={{ x: FORKLIFT_HOME.x, y: FORKLIFT_HOME.y }}
                transition={phase === 'resetting' ? resetSpring : spring}
              >
                {hasPallet && <PalletOnForks />}
                <ForkliftSVG
                  color={activeAction?.color ?? '#4fc3f7'}
                  forksUp={forksUp}
                />
              </motion.g>
            </svg>

            {/* Overlay label */}
            <div className="absolute top-3 left-3 font-mono text-xs text-steel-500 tracking-wider uppercase">
              Warehouse — Top View
            </div>
            <div className="absolute top-3 right-3">
              <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full font-mono text-xs border ${
                phase === 'idle' ? 'border-emerald-600/50 text-emerald-400 bg-emerald-900/20'
                : phase === 'done' ? 'border-amber-600/50 text-amber-400 bg-amber-900/20'
                : 'border-blue-600/50 text-blue-300 bg-blue-900/20'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  phase === 'idle' ? 'bg-emerald-400 animate-pulse'
                  : phase === 'done' ? 'bg-amber-400'
                  : 'bg-blue-400 animate-pulse'
                }`} />
                {phase === 'idle' ? 'Standby' : phase === 'moving' ? 'In Transit' : phase === 'done' ? 'Task Done' : 'Returning'}
              </span>
            </div>
          </div>

          {/* ── Tablet Interface ── */}
          <div className="relative w-full max-w-[280px] xl:max-w-[260px]">
            {/* Tablet frame */}
            <div className="relative bg-[#111827] border-[10px] border-[#1f2937] rounded-[28px] shadow-[0_0_50px_rgba(0,0,0,0.7)] overflow-hidden"
                 style={{ minHeight: '380px' }}>
              {/* Status bar */}
              <div className="flex justify-between items-center px-4 py-2 bg-[#0d1117]">
                <span className="font-mono text-[10px] text-green-400">WMS v4.2.1</span>
                <span className="font-mono text-[10px] text-steel-500">●●● CONNECTED</span>
              </div>

              {/* Screen content */}
              <div className="p-5">
                <p className="font-mono text-[10px] text-steel-500 uppercase tracking-widest mb-1">Operation Center</p>
                <h3 className="font-display text-2xl tracking-wider text-white mb-1">WHAT TO DO?</h3>
                <div className="h-px bg-navy-600 mb-5" />

                {/* Action buttons */}
                <div className="space-y-3 mb-6">
                  {Object.values(ACTIONS).map(action => (
                    <motion.button
                      key={action.id}
                      onClick={() => handleAction(action.id)}
                      disabled={phase !== 'idle'}
                      className="w-full text-left px-4 py-3 rounded-lg font-sans font-semibold text-sm text-white flex items-center gap-3 transition-opacity"
                      style={{ background: action.color, opacity: phase !== 'idle' ? 0.4 : 1 }}
                      whileHover={phase === 'idle' ? { scale: 1.02 } : {}}
                      whileTap={phase === 'idle' ? { scale: 0.97 } : {}}
                    >
                      <span className="text-lg">{action.emoji}</span>
                      {action.label}
                    </motion.button>
                  ))}
                </div>

                {/* Active task indicator */}
                <AnimatePresence>
                  {activeAction && phase === 'moving' && (
                    <motion.div
                      className="bg-navy-800 border border-navy-600 rounded-lg p-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="font-mono text-xs text-steel-500 mb-1">Active Task</p>
                      <p className="font-sans text-sm text-white font-medium flex items-center gap-2">
                        <span className="animate-pulse">⚡</span>
                        {activeAction.label}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home button */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#374151] rounded-full" />
            </div>

            <HandPointer visible={showHand} />
          </div>
        </div>

        {/* ── Message Modal ── */}
        <AnimatePresence>
          {phase === 'done' && activeAction && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={handleDismiss}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />

              {/* Card */}
              <motion.div
                className="relative z-10 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.7, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Colored top bar */}
                <div className="h-2" style={{ background: activeAction.color }} />

                <div className="bg-navy-800 border border-navy-600 p-8 text-center">
                  <motion.div
                    className="text-6xl mb-5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
                  >
                    {activeAction.messageIcon}
                  </motion.div>

                  <p className="font-mono text-xs text-steel-500 uppercase tracking-widest mb-3">
                    Lucas Gutiérrez — About Me
                  </p>

                  <motion.h3
                    className="font-display text-3xl md:text-4xl tracking-wide text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeAction.message}
                  </motion.h3>

                  <motion.button
                    onClick={handleDismiss}
                    className="px-8 py-3 text-white font-sans font-bold tracking-wide rounded-lg transition-opacity hover:opacity-90"
                    style={{ background: activeAction.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    ← Return Forklift
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
