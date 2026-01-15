'use client'

import { LucideIcon } from 'lucide-react'

interface TechIconProps {
    icon: LucideIcon
    className?: string
    color?: string
}

export function TechIcon({ icon: Icon, className = "", color = "var(--superteam-purple)" }: TechIconProps) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-white/[0.02] border border-white/5" />

            {/* Technical SVG Pattern Background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad)" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M10 50 L20 50 M80 50 L90 50 M50 10 L50 20 M50 80 L50 90" stroke="url(#grad)" strokeWidth="1" />
                <rect x="45" y="45" width="10" height="10" fill="none" stroke="url(#grad)" strokeWidth="0.5" transform="rotate(45 50 50)" />
            </svg>

            {/* Inner Glow/Blur */}
            <div
                className="absolute w-12 h-12 rounded-full blur-xl opacity-20"
                style={{ backgroundColor: color }}
            />

            {/* Central Icon */}
            <Icon size={28} className="relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color }} />

            {/* Perspective Lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-1/4 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="absolute top-0 left-0 h-px w-1/4 bg-gradient-to-r from-white/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-px h-1/4 bg-gradient-to-t from-white/20 to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-white/20 to-transparent" />
            </div>
        </div>
    )
}
