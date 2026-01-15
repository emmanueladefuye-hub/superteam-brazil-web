'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { partners } from '@/lib/data/partners'

export function PartnersSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px w-12 bg-white/10" />
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
                            Ecosystem Partners
                        </h3>
                        <div className="h-px w-12 bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-30 hover:opacity-100 transition-opacity duration-1000">
                    {partners.map((partner, index) => (
                        <ScrollReveal key={partner.id} delay={index * 0.05} direction="none">
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grayscale hover:grayscale-0 transition-all duration-700"
                            >
                                <div className="text-xl md:text-2xl font-display font-bold text-white/50 group-hover:text-superteam-purple group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all">
                                    {partner.name}
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
