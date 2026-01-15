'use client'

import { Card } from '@/components/shared/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Twitter } from 'lucide-react'

const tweets = [
    {
        id: 1,
        author: 'Alex (Solana) 🏴‍☠️',
        handle: '@alex_solana',
        content: 'Superteam Brazil is doing incredible work growing the ecosystem in LATAM. If you are building in Brazil, you need to be there.',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&auto=format&fit=crop'
    },
    {
        id: 2,
        author: 'Luiza B.',
        handle: '@luizab_web3',
        content: 'Just received my first bounty for a Rust technical guide! Thanks @st_brazil for the support and the opportunity. 🇧🇷🚀',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop'
    },
    {
        id: 3,
        author: 'Dev J.',
        handle: '@dev_joao',
        content: 'The mentorship I got through Superteam was life-changing. From a junior dev to building my own protocol in 6 months.',
        avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&auto=format&fit=crop'
    },
    {
        id: 4,
        author: 'Solana News',
        handle: '@solana_news',
        content: 'Superteam Brazil hit 500 members! The growth of the Brazilian developer community is absolutely staggering.',
        avatar: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=400&h=400&auto=format&fit=crop'
    }
]

export function TweetsSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brazil-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal direction="up" className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Community <span className="text-gradient">Voices</span>
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        See what the global Solana community is saying about our mission and our builders.
                    </p>
                </ScrollReveal>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {tweets.map((tweet, index) => (
                        <ScrollReveal key={tweet.id} delay={index * 0.1} direction="up" className="break-inside-avoid">
                            <Card className="p-8 glass group border-white/5 hover:border-superteam-purple/20 transition-all duration-500 rounded-[1.5rem]" hover={true}>
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={tweet.avatar} alt={tweet.author} className="w-12 h-12 rounded-full bg-white/5" />
                                    <div className="flex-grow">
                                        <div className="font-bold text-white group-hover:text-superteam-purple transition-colors">{tweet.author}</div>
                                        <div className="text-sm text-foreground/40">{tweet.handle}</div>
                                    </div>
                                    <Twitter size={20} className="text-superteam-purple opacity-40" />
                                </div>
                                <p className="text-foreground/80 leading-relaxed text-lg italic">
                                    "{tweet.content}"
                                </p>
                                <div className="mt-8 flex items-center justify-between text-xs font-bold text-foreground/20 uppercase tracking-widest">
                                    <span>Twitter / X</span>
                                    <a
                                        href="https://x.com/SuperteamBrazil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-superteam-purple transition-colors cursor-pointer"
                                    >
                                        Read Thread
                                    </a>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
