'use client'

import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export function JoinCTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal direction="up">
                    <div className="relative rounded-[3rem] overflow-hidden bg-white/[0.03] border border-white/10 p-12 md:p-24 text-center">
                        {/* Background Gradients */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-superteam-purple/20 via-transparent to-brazil-green/10 pointer-events-none" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -top-1/2 -left-1/4 w-full h-full bg-superteam-purple/20 blur-[120px] rounded-full pointer-events-none"
                        />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-superteam-purple flex items-center justify-center mx-auto mb-10 glow-purple">
                                <Zap className="text-white" size={40} />
                            </div>

                            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
                                Ready to build the <br />
                                <span className="text-gradient">Future in Brazil?</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-foreground/60 mb-12 leading-relaxed">
                                Join Latin America's fastest-growing community of builders.
                                Whether you're a developer, designer, or creator, there's a place for you.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    size="lg"
                                    className="h-16 px-12 text-xl font-bold rounded-2xl glow-purple"
                                    onClick={() => window.open('https://discord.gg/superteam', '_blank')}
                                >
                                    Join Discord
                                    <ArrowRight size={24} />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-16 px-12 text-xl font-bold rounded-2xl"
                                    onClick={() => window.open('https://luma.com/superteambrasil?period=past', '_blank')}
                                >
                                    Submit Interest
                                </Button>
                            </div>

                            <p className="mt-12 text-sm font-bold text-foreground/30 uppercase tracking-[0.3em]">
                                No coding experience required to join & grow
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
