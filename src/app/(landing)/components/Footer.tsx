'use client'

import Link from 'next/link'
import { Twitter, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'

const footerLinks = {
    community: [
        { label: 'Discord', href: 'https://discord.gg/superteam' },
        { label: 'Telegram', href: 'https://t.me/superteambrazil' },
        { label: 'Twitter / X', href: 'https://x.com/SuperteamBrazil' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/superteamcontent/' },
        { label: 'Luma Hub', href: 'https://luma.com/superteambrasil?period=past' },
    ],
    ecosystem: [
        { label: 'Solana Foundation', href: 'https://solana.com' },
        { label: 'Superteam Global', href: 'https://superteam.fun' },
        { label: 'Build in Public', href: 'https://solana.com/developers' },
        { label: 'Resources', href: 'https://solana.com/resources' },
    ],
    company: [
        { label: 'Mission', href: '#mission' },
        { label: 'Members', href: '/members' },
        { label: 'Events', href: '#events' },
        { label: 'FAQ', href: '#faq' },
    ],
}

export function Footer() {
    return (
        <footer className="pt-24 pb-12 border-t border-white/5 bg-background relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-superteam-purple/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="/" className="inline-flex items-center space-x-3 mb-8 group">
                            <Logo size={40} className="transition-transform duration-500 group-hover:scale-110" />
                            <span className="text-2xl font-display font-bold text-white group-hover:text-superteam-purple transition-colors">
                                Superteam Brazil
                            </span>
                        </Link>
                        <p className="text-foreground/50 text-lg leading-relaxed max-w-sm mb-8">
                            The premier hub for Solana builders in Brazil. Connect, build, and earn
                            in the fastest growing crypto community in Latin America.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Twitter, href: 'https://x.com/SuperteamBrazil' },
                                { Icon: Github, href: 'https://github.com/superteam-labs' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/company/superteamcontent/' },
                                { Icon: MessageSquare, href: 'https://discord.gg/superteam' }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-foreground/40 hover:text-white hover:bg-superteam-purple/20 hover:border-superteam-purple/30 transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="col-span-1">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">
                                {title}
                            </h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-foreground/50 hover:text-superteam-purple text-sm font-medium transition-colors flex items-center group"
                                        >
                                            {link.label}
                                            {link.href.startsWith('http') && (
                                                <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-foreground/30 font-medium">
                        © {new Date().getFullYear()} Superteam Brazil. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-foreground/30 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Brand Assets</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
