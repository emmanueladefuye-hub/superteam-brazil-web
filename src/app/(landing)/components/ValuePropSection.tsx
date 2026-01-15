'use client'

import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Rocket, Code, Megaphone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/shared/Button'

const valueProps = [
    {
        title: 'For Founders',
        description: 'Get funding, expert mentorship, and access to a global network of investors.',
        icon: Rocket,
        features: ['Equity-free Grants', 'Fundraising Support', 'Talent Hiring'],
        link: 'https://airtable.com/shrPPmeQSLVZH5b0S',
        gradient: 'gradient-card-purple',
        glow: 'glow-purple'
    },
    {
        title: 'For Builders',
        description: 'Earn by contributing to open source, winning hackathons, and landing top jobs.',
        icon: Code,
        features: ['Bounties & Grants', 'Hackathon Support', 'Dev Jobs'],
        link: 'https://earn.superteam.fun',
        gradient: 'gradient-card-green',
        glow: 'glow-green'
    },
    {
        title: 'For Creators',
        description: 'Amplify your voice, get sponsored, and grow your audience in Web3.',
        icon: Megaphone,
        features: ['Content Bounties', 'Distribution', 'Sponsorships'],
        link: 'https://earn.superteam.fun/category/content/',
        gradient: 'gradient-card-blue',
        glow: 'glow-blue'
    }
]

export function ValuePropSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Choose Your <span className="text-gradient">Path</span>
                        </h2>
                        <p className="text-foreground/60 text-lg">
                            Whether you're building a protocol, writing code, or creating content, we have the resources to help you succeed.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {valueProps.map((prop, index) => (
                        <ScrollReveal key={prop.title} delay={index * 0.1}>
                            <Card className="h-full p-8 flex flex-col justify-between group hover:bg-white/[0.02]">
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prop.gradient} ${prop.glow}`}>
                                        <prop.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                                    <p className="text-foreground/60 mb-8 leading-relaxed">
                                        {prop.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {prop.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm font-medium text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-superteam-purple mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full justify-between group-hover:bg-superteam-purple group-hover:text-white group-hover:border-superteam-purple transition-all duration-300"
                                    onClick={() => window.open(prop.link, '_blank')}
                                >
                                    Get Started
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
