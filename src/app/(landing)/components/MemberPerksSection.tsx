'use client'

import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Globe, Building, Gift, Ticket } from 'lucide-react'

const perks = [
    {
        title: 'Global Network',
        description: 'Connect with builders and founders across 10+ countries in the Superteam ecosystem.',
        icon: Globe,
        gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
        title: 'Coworking Access',
        description: 'Get access to premium coworking spaces worldwide through our partnerships.',
        icon: Building,
        gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
        title: 'Partner Benefits',
        description: 'Exclusive discounts and credits for tools like Helius, Shyft, and more.',
        icon: Gift,
        gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
        title: 'Exclusive Events',
        description: 'VIP access to hackathons, meetups, and conferences globally.',
        icon: Ticket,
        gradient: 'from-pink-500/20 to-rose-500/20'
    }
]

export function MemberPerksSection() {
    return (
        <section className="py-20 relative overflow-hidden bg-white/[0.02]">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Member <span className="text-gradient">Perks</span>
                        </h2>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                            Joining Superteam Brazil unlocks a world of opportunities and benefits designed to accelerate your journey.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {perks.map((perk, index) => (
                        <ScrollReveal key={perk.title} delay={index * 0.1}>
                            <Card className="h-full p-8 group hover:bg-white/[0.05] border-white/5">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${perk.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                    <perk.icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {perk.description}
                                </p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
