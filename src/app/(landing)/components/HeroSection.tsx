'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight, Globe, Users, Zap } from 'lucide-react'
import { Card } from '@/components/shared/Card'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal direction="down" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-superteam-purple text-sm font-bold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-superteam-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-superteam-purple"></span>
                </span>
                Solana Hub Brazil 🇧🇷
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold leading-tight tracking-tight mb-8">
                Build the <span className="text-gradient">Next Big Thing</span> on Solana
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
                Join the premier community of Brazilian builders, designers, and creators
                shaping the future of the decentralized web.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="h-16 px-10 text-lg sm:text-xl font-bold rounded-2xl glow-purple"
                  onClick={() => window.open('https://luma.com/superteambrasil?period=past', '_blank')}
                >
                  Launch App
                  <ArrowRight size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-lg sm:text-xl font-bold rounded-2xl"
                  onClick={() => window.open('https://solana.com/developers', '_blank')}
                >
                  Build Now
                </Button>
              </div>
            </ScrollReveal>

            {/* Quick Stats Mini */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 opacity-40">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-superteam-purple" />
                  <span className="text-sm font-bold tracking-widest uppercase">500+ Builders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-superteam-purple" />
                  <span className="text-sm font-bold tracking-widest uppercase">$1M+ Earned</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 relative w-full lg:w-auto mt-20 lg:mt-0">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative flex items-center justify-center min-h-[500px]">
                {/* HUD Rings (Animated) */}
                <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
                <div className="absolute w-[110%] h-[110%] border border-white/5 rounded-full animate-reverse-spin opacity-10 pointer-events-none" />

                {/* Stat Grid (Inspired by Solana Reference) */}
                <div className="grid grid-cols-2 gap-6 relative z-10 p-4">
                  {/* Card 1: Total Transactions (Red Gradient) */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    initial={{ rotate: -5, y: 0 }}
                    className="p-6 rounded-[2rem] gradient-card-red glow-red text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                      <Zap size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Total Transactions</div>
                      <div className="text-2xl sm:text-3xl font-display font-bold">19,635M</div>
                    </div>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        className="h-full bg-white"
                      />
                    </div>
                  </motion.div>

                  {/* Card 2: Block Time (Blue Gradient) */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    initial={{ rotate: 5, y: 20 }}
                    className="p-6 rounded-[2rem] gradient-card-blue glow-blue text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                      <Zap size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Block Time</div>
                      <div className="text-2xl sm:text-3xl font-display font-bold">2824ms</div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 flex-1 rounded-full ${i <= 4 ? 'bg-white' : 'bg-white/20'}`} />
                      ))}
                    </div>
                  </motion.div>

                  {/* Card 3: Nodes (Purple Gradient) */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    initial={{ rotate: 2, y: -10 }}
                    className="p-6 rounded-[2rem] gradient-card-purple glow-purple text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                      <Users size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Nodes</div>
                      <div className="text-2xl sm:text-3xl font-display font-bold">1,026</div>
                    </div>
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Active Validators</div>
                  </motion.div>

                  {/* Card 4: Avg Fee (Cyan/Blue Gradient) */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    initial={{ rotate: -3, y: 10 }}
                    className="p-6 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl text-white flex flex-col justify-between aspect-[4/3] relative overflow-hidden group border border-white/20"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                      <Globe size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Avg Fee</div>
                      <div className="text-2xl sm:text-3xl font-display font-bold">$0.00025</div>
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-white/20 text-[8px] font-bold uppercase tracking-widest w-fit">Lowest in Web3</div>
                  </motion.div>
                </div>

                {/* Technical Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-superteam-purple/20 blur-[100px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brazil-green-dark/20 blur-[100px] rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}