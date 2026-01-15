'use client'

import { useState } from 'react'

import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-superteam-purple transition-colors">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, role, or skill..."
        className="w-full h-14 pl-12 pr-12 rounded-2xl glass border-white/5 focus:border-superteam-purple/50 focus:ring-1 focus:ring-superteam-purple/50 outline-none transition-all placeholder:text-foreground/20 text-white font-medium"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      )}
    </div>
  )
}