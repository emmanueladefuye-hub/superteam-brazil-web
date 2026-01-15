'use client'

import { MemberCard } from './MemberCard'
import { filterMembers, members } from '@/lib/data/members'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface MemberGridProps {
  searchQuery: string
  filters: string[]
}

export function MemberGrid({ searchQuery, filters }: MemberGridProps) {
  const filteredMembers = filterMembers(members, searchQuery, filters)

  if (filteredMembers.length === 0) {
    return (
      <div className="text-center py-20 px-4 glass rounded-3xl border-white/5">
        <h3 className="text-2xl font-display font-bold mb-2">No members found</h3>
        <p className="text-foreground/40">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredMembers.map((member, index) => (
        <ScrollReveal
          key={member.id}
          delay={index * 0.05}
          direction="up"
          duration={0.5}
        >
          <MemberCard member={member} />
        </ScrollReveal>
      ))}
    </div>
  )
}