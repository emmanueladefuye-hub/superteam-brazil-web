'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, ExternalLink } from 'lucide-react'
import type { Member } from '@/lib/data/members'
import { Card } from '@/components/shared/Card'

export function MemberCard({ member }: { member: Member }) {
  const isCoreTeam = member.tags.includes('Core Team')

  return (
    <Card
      className={`group relative p-8 flex flex-col items-center text-center ${isCoreTeam
        ? 'bg-superteam-purple/[0.03] border-superteam-purple/20 hover:border-superteam-purple/50'
        : 'glass hover:border-white/20'
        }`}
    >
      {isCoreTeam && (
        <div className="absolute top-4 right-4">
          <span className="flex h-2 w-2 rounded-full bg-superteam-purple animate-pulse" />
        </div>
      )}

      <div className="relative w-24 h-24 mb-6">
        <div className={`absolute -inset-1 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-md ${isCoreTeam ? 'bg-superteam-purple' : 'bg-white/20'
          }`} />
        <img
          src={member.photo}
          alt={member.name}
          className="relative z-10 w-full h-full rounded-full object-cover transition-all duration-500 border-2 border-white/10 group-hover:border-superteam-purple"
        />
      </div>

      <h3 className="text-xl font-display font-bold mb-1 group-hover:text-superteam-purple transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest mb-2">
        {member.role}
      </p>

      {member.company && (
        <p className="text-xs font-bold text-superteam-purple/60 mb-6 flex items-center justify-center gap-1 group-hover:text-superteam-purple transition-colors">
          {member.company}
          <ExternalLink size={10} />
        </p>
      )}

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${tag === 'Core Team'
              ? 'bg-superteam-purple text-white'
              : 'bg-white/5 border border-white/5 text-foreground/40 group-hover:text-foreground/60 transition-colors'
              }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        {member.twitter && (
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass border-white/5 flex items-center justify-center text-foreground/30 hover:text-white hover:bg-superteam-purple/20 hover:border-superteam-purple/30 transition-all duration-300"
          >
            <Twitter size={18} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass border-white/5 flex items-center justify-center text-foreground/30 hover:text-white hover:bg-superteam-purple/20 hover:border-superteam-purple/30 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
    </Card>
  )
}