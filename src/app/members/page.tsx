'use client'

import { useState } from 'react'
import { MemberGrid } from './components/MemberGrid'
import { FilterBar } from './components/FilterBar'
import { SearchBar } from './components/SearchBar'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/app/(landing)/components/Footer'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-superteam-purple/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brazil-green/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 pt-40 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <ScrollReveal direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Meet the builders, designers, and innovators of Superteam Brazil.
              Filtering through {activeFilters.length > 0 ? activeFilters.join(', ') : 'everyone'}.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto space-y-10 mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-8 glass rounded-3xl border-white/5 space-y-8">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <FilterBar activeFilters={activeFilters} onChange={setActiveFilters} />
            </div>
          </ScrollReveal>

          <div className="pt-10">
            <MemberGrid searchQuery={searchQuery} filters={activeFilters} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}