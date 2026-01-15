'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight, Globe, Users, Zap, Coins, Wallet, Code, Blocks, Cpu, Shield, Sparkles, Database, Network, Bitcoin } from 'lucide-react'
import { Card } from '@/components/shared/Card'

// Floating icon configuration
const floatingIcons = [
  { Icon: Coins, size: 32, x: '5%', y: '15%', delay: 0, duration: 6, color: 'text-yellow-400/30' },
  { Icon: Wallet, size: 28, x: '12%', y: '55%', delay: 1, duration: 7, color: 'text-purple-400/25' },
  { Icon: Code, size: 36, x: '8%', y: '80%', delay: 2, duration: 5, color: 'text-green-400/20' },
  { Icon: Blocks, size: 40, x: '85%', y: '10%', delay: 0.5, duration: 8, color: 'text-blue-400/25' },
  { Icon: Cpu, size: 30, x: '90%', y: '45%', delay: 1.5, duration: 6, color: 'text-cyan-400/30' },
  { Icon: Shield, size: 34, x: '88%', y: '75%', delay: 2.5, duration: 7, color: 'text-emerald-400/25' },
  { Icon: Sparkles, size: 26, x: '20%', y: '25%', delay: 0.8, duration: 5, color: 'text-pink-400/20' },
  { Icon: Database, size: 32, x: '75%', y: '20%', delay: 1.2, duration: 6, color: 'text-orange-400/25' },
  { Icon: Network, size: 38, x: '15%', y: '70%', delay: 2, duration: 8, color: 'text-violet-400/20' },
  { Icon: Globe, size: 44, x: '78%', y: '65%', delay: 0.3, duration: 7, color: 'text-teal-400/25' },
  { Icon: Bitcoin, size: 36, x: '25%', y: '40%', delay: 1.8, duration: 6, color: 'text-amber-400/20' },
  { Icon: Zap, size: 30, x: '70%', y: '35%', delay: 2.2, duration: 5, color: 'text-yellow-300/25' },
  // Center icons between stats and text
  { Icon: Coins, size: 42, x: '45%', y: '20%', delay: 0.4, duration: 7, color: 'text-yellow-500/35' },
  { Icon: Blocks, size: 48, x: '50%', y: '45%', delay: 1.1, duration: 8, color: 'text-purple-500/30' },
  { Icon: Sparkles, size: 36, x: '42%', y: '70%', delay: 0.7, duration: 6, color: 'text-cyan-400/35' },
  { Icon: Network, size: 44, x: '55%', y: '30%', delay: 1.6, duration: 7, color: 'text-green-400/30' },
  { Icon: Shield, size: 38, x: '48%', y: '60%', delay: 2.1, duration: 6, color: 'text-blue-400/35' },
  { Icon: Cpu, size: 34, x: '52%', y: '80%', delay: 0.9, duration: 5, color: 'text-orange-400/30' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-12 pb-4 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Floating 3D Web3 Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} drop-shadow-[0_0_15px_currentColor]`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.15, 1],
              y: [0, -20, 0],
              rotateY: [0, 180, 360],
              rotateX: [0, 10, 0],
            }}
            transition={{
              delay: item.delay,
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

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
                We lead <span className="text-gradient">Solana's growth</span> in Brazil 🇧🇷
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
                Founders, creators, and investors unite to shape Solana's future. Join the premier community shaping the decentralized web in Latin America.
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

          <div className="flex-1 relative w-full lg:w-auto mt-0 lg:-mt-20">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative flex items-center justify-center min-h-[240px]">
                {/* HUD Rings (Animated) */}
                <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
                <div className="absolute w-[110%] h-[110%] border border-white/5 rounded-full animate-reverse-spin opacity-10 pointer-events-none" />

                {/* Stat Grid (Inspired by Solana Reference) */}
                <div className="grid grid-cols-2 gap-4 relative z-10 p-2">
                  {/* Card 1: Total Transactions (Red Gradient) */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    initial={{ rotate: -3, y: 0 }}
                    className="p-5 rounded-[1.5rem] gradient-card-red glow-red text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
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
                    initial={{ rotate: 3, y: 0 }}
                    className="p-5 rounded-[1.5rem] gradient-card-blue glow-blue text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
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
                    initial={{ rotate: 2, y: 0 }}
                    className="p-5 rounded-[1.5rem] gradient-card-purple glow-purple text-white flex flex-col justify-between aspect-[4/3] shadow-2xl relative overflow-hidden group border border-white/20"
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
                    initial={{ rotate: -2, y: 0 }}
                    className="p-5 rounded-[1.5rem] bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl text-white flex flex-col justify-between aspect-[4/3] relative overflow-hidden group border border-white/20"
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