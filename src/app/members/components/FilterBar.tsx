'use client'

const skillTags = [
  'Core Team',
  'Rust',
  'Frontend',
  'Design',
  'Content',
  'Growth',
  'Marketing',
  'Business Dev'
]

interface FilterBarProps {
  activeFilters: string[]
  onChange: (filters: string[]) => void
}

export function FilterBar({ activeFilters, onChange }: FilterBarProps) {
  const toggleFilter = (tag: string) => {
    if (activeFilters.includes(tag)) {
      onChange(activeFilters.filter(f => f !== tag))
    } else {
      onChange([...activeFilters, tag])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skillTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleFilter(tag)}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeFilters.includes(tag)
            ? 'bg-superteam-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
            : 'glass border-white/5 text-foreground/40 hover:text-white hover:border-white/20'
            }`}
        >
          {tag}
        </button>
      ))}

      {activeFilters.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-superteam-purple hover:bg-superteam-purple/10 transition-all border border-superteam-purple/20"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}