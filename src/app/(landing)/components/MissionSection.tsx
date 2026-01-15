'use client'

import { ArrowRight, Users, Calendar, DollarSign, Briefcase, GraduationCap, Network } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { TechIcon } from '@/components/shared/TechIcon'

const pillars = [
  {
    icon: Users,
    title: 'Builder Support',
    color: '#8B5CF6', // Purple
    description: 'Get guidance from experienced founders and developers in the Solana ecosystem.'
  },
  {
    icon: Calendar,
    title: 'Local Events',
    color: '#10B981', // green
    description: 'Hackathons, workshops, and meetups connecting the Brazilian crypto community.'
  },
  {
    icon: DollarSign,
    title: 'Equity Grants',
    color: '#EC4899', // pink
    description: 'Exclusive access to Solana Foundation grants and ecosystem funding opportunities.'
  },
  {
    icon: Briefcase,
    title: 'Earn Crypto',
    color: '#3B82F6', // blue
    description: 'Find high-paying bounties and full-time roles at top global Web3 projects.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    color: '#F59E0B', // orange
    description: 'Learn Rust, Anchor, and Solana development through our specialized workshops.'
  },
  {
    icon: Network,
    title: 'Global Network',
    color: '#06B6D4', // cyan
    description: 'Connect with a global network of builders and investors across 10+ countries.'
  }
]

export function MissionSection() {
  return (
    <section id="mission" className="section-flow relative overflow-hidden">
      {/* Background Layer: Network & Plexus */}
      <div className="absolute inset-0 bg-network opacity-5 mix-blend-screen" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      {/* Decorative HUD Circles */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] border border-white/5 rounded-full opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-superteam-purple mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-superteam-purple animate-pulse" />
              Ecosystem Mission
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-[0.9] lg:leading-[1.1]">
              Empowering the Next <br className="hidden sm:block" />
              <span className="text-gradient">Generation of Builders</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/50 leading-relaxed max-w-2xl mx-auto font-medium">
              We provide the high-octane infrastructure and global network needed to
              launch top-tier Web3 projects from Brazil.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {pillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.title}
              delay={0.1 * index}
              direction="up"
            >
              <div className="relative group p-px rounded-[2.5rem] overflow-hidden">
                {/* Animated Border Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 transition-all duration-700 opacity-50 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to bottom right, ${pillar.color}40, transparent, ${pillar.color}10)` }}
                />

                <Card className="p-8 md:p-10 h-full flex flex-col group glass border-transparent relative z-10 bg-black/60 backdrop-blur-3xl rounded-[2.5rem]" hover={false}>
                  <div className="mb-10">
                    <TechIcon icon={pillar.icon} color={pillar.color} className="w-16 h-16" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-white transition-colors">{pillar.title}</h3>
                  <p className="text-base text-foreground/40 leading-relaxed group-hover:text-foreground/60 transition-colors duration-500">{pillar.description}</p>

                  <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Module {index + 1}</span>
                    <ArrowRight size={20} style={{ color: pillar.color }} className="translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}