'use client'

import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight, Twitter, Linkedin } from 'lucide-react'
import { members } from '@/lib/data/members'
import Link from 'next/link'

export function MembersPreview() {
    const featuredMembers = members.slice(0, 4)

    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <ScrollReveal direction="up">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Our <span className="text-gradient">Community</span>
                        </h2>
                        <p className="text-xl text-foreground/60">
                            Meet the talented builders, creators, and innovators shaping the future of Web3 in Brazil.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {featuredMembers.map((member, index) => (
                        <ScrollReveal key={member.id} delay={index * 0.1}>
                            <Card className="p-8 group text-center flex flex-col items-center">
                                <div className="relative w-24 h-24 mb-6">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-superteam-purple to-brazil-green rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="relative z-10 w-full h-full rounded-full object-cover transition-all duration-500 border-2 border-white/10 group-hover:border-superteam-purple"
                                    />
                                </div>

                                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                                <p className="text-sm text-foreground/40 font-bold uppercase tracking-wider mb-4">{member.role}</p>

                                <div className="flex flex-wrap gap-2 justify-center mb-8">
                                    {member.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-foreground/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4">
                                    {member.twitter && (
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-superteam-purple transition-colors">
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-superteam-purple transition-colors">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal direction="up" className="text-center">
                    <Link href="/members">
                        <Button variant="secondary" size="lg" className="px-12">
                            View All Members
                            <ArrowRight size={20} className="ml-2" />
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    )
}
