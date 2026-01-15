'use client'

import { cn } from '@/lib/utils/cn'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode
    className?: string
    glass?: boolean
    hover?: boolean
}

export function Card({
    children,
    className,
    glass = false,
    hover = true,
    ...props
}: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
            className={cn(
                'rounded-2xl border transition-colors',
                glass
                    ? 'glass'
                    : 'bg-card border-white/10 hover:border-superteam-purple/30',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}
