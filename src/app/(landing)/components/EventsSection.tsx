'use client'

import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react'
import { upcomingEvents } from '@/lib/data/events'

export function EventsSection() {
    return (
        <section id="events" className="section-flow relative overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-network opacity-5 mix-blend-screen" />
            <div className="absolute inset-0 bg-white/[0.01]" />

            {/* HUD technical markers */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-white/10 m-8" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-white/10 m-8" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <ScrollReveal direction="right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-superteam-purple mb-6">
                            Discovery Hub
                        </div>
                        <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.9]">
                            Upcoming <span className="text-gradient">Events</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="left">
                        <Button variant="outline" className="h-14 px-8 rounded-2xl group border-white/10 hover:bg-white/5">
                            Directory
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {upcomingEvents.map((event, index) => (
                        <ScrollReveal key={event.id} delay={index * 0.1}>
                            <div className="group relative p-px rounded-[2.5rem] overflow-hidden">
                                {/* Border Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover:from-superteam-purple/40 transition-all duration-700" />

                                <Card className="overflow-hidden group h-full flex flex-col glass border-transparent bg-black/40 backdrop-blur-3xl rounded-[2.5rem]" hover={false}>
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl text-[10px] font-bold uppercase tracking-widest text-superteam-purple border border-white/10 shadow-2xl">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10 flex-grow flex flex-col">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 group-hover:text-white transition-colors leading-tight">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-4 mb-10 flex-grow text-foreground/40 font-medium">
                                            <div className="flex items-center gap-4 group-hover:text-foreground/60 transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                    <Calendar size={16} className="text-superteam-purple" />
                                                </div>
                                                <span className="text-sm">{new Date(event.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-4 group-hover:text-foreground/60 transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                    <MapPin size={16} className="text-superteam-purple" />
                                                </div>
                                                <span className="text-sm">{event.location}</span>
                                            </div>
                                        </div>

                                        <Button variant="secondary" className="w-full h-14 rounded-xl justify-between px-6 bg-white/5 hover:bg-superteam-purple group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500" onClick={() => window.open(event.registrationUrl, '_blank')}>
                                            <span className="font-bold uppercase tracking-widest text-xs">Verify & Register</span>
                                            <ExternalLink size={16} />
                                        </Button>
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
