'use client'

import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { BookOpen, Terminal, MessageCircle } from 'lucide-react'
import { Button } from '@/components/shared/Button'

const resources = [
    {
        title: 'Start Here',
        description: 'New to Solana? Here is everything you need to know to get started.',
        icon: BookOpen,
        link: 'https://solana.com/resources',
        action: 'Read Guide'
    },
    {
        title: 'Developer Docs',
        description: 'Technical documentation, tutorials, and API references for builders.',
        icon: Terminal,
        link: 'https://solana.com/docs',
        action: 'View Docs'
    },
    {
        title: 'Community',
        description: 'Join our Discord to meet other builders and get help.',
        icon: MessageCircle,
        link: 'https://discord.gg/superteam',
        action: 'Join Chat'
    }
]

export function ResourcesSection() {
    return (
        <section className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Essential <span className="text-gradient">Resources</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <ScrollReveal key={resource.title} delay={index * 0.1}>
                            <Card className="p-8 hover:bg-white/[0.02]">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <resource.icon size={24} className="text-superteam-purple" />
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="rounded-full text-xs"
                                        onClick={() => window.open(resource.link, '_blank')}
                                    >
                                        {resource.action}
                                    </Button>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    {resource.description}
                                </p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
