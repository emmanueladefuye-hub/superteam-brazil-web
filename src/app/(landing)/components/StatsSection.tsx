'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const stats = [
  { value: 500, suffix: '+', label: 'Active Members', gradient: 'gradient-card-purple', glow: 'glow-purple', detail: 'Vetted Builders' },
  { value: 50, suffix: '+', label: 'Events Hosted', gradient: 'gradient-card-green', glow: 'glow-blue', detail: 'IRL & Online' },
  { value: 100, suffix: '+', label: 'Bounties Done', gradient: 'gradient-card-blue', glow: 'glow-blue', detail: 'Ecosystem Growth' },
  { value: 150, prefix: '$', suffix: 'K+', label: 'Distributed', gradient: 'gradient-card-red', glow: 'glow-red', detail: 'Direct Funding' }
]

export function StatsSection() {
  return (
    <section className="section-flow relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-superteam-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-6 md:p-10 text-center rounded-[2.5rem] ${stat.gradient} ${stat.glow} transition-all duration-500 relative overflow-hidden group border border-white/20 shadow-2xl`}
              >
                {/* HUD Accent */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                <div className="mb-2 md:mb-4 relative z-10">
                  <span className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>
                <div className="text-[10px] md:text-sm text-white/60 font-bold uppercase tracking-[0.2em] relative z-10 mb-2">
                  {stat.label}
                </div>
                <div className="text-[8px] md:text-xs text-white/40 font-bold uppercase tracking-widest relative z-10">
                  {stat.detail}
                </div>

                {/* Technical lines */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/2 bg-white/40 shadow-[0_0_10px_white]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}