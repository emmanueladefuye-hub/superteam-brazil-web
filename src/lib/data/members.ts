export interface Member {
  id: string
  name: string
  role: string
  company?: string
  photo: string
  tags: string[]
  twitter?: string
  linkedin?: string
}

export const members: Member[] = [
  {
    id: '1',
    name: 'João Silva',
    role: 'Solana Developer',
    company: 'Superteam Brazil',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop',
    tags: ['Core Team', 'Rust', 'Frontend'],
    twitter: 'https://twitter.com/joaosilva'
  },
  {
    id: '2',
    name: 'Maria Santos',
    role: 'UI/UX Designer',
    company: 'Web3 Studio',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop',
    tags: ['Design', 'Frontend', 'Core Team'],
    twitter: 'https://twitter.com/mariasantos'
  },
  {
    id: '3',
    name: 'Pedro Costa',
    role: 'Smart Contract Developer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop',
    tags: ['Rust', 'Backend', 'DeFi'],
    twitter: 'https://twitter.com/pedrocosta'
  },
  {
    id: '4',
    name: 'Ana Oliveira',
    role: 'Content Creator',
    company: 'Crypto Media',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop',
    tags: ['Content', 'Marketing', 'Growth'],
    twitter: 'https://twitter.com/anaoliveira'
  },
  {
    id: '5',
    name: 'Carlos Ferreira',
    role: 'Business Development',
    company: 'Solana Foundation',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop',
    tags: ['Business Dev', 'Core Team', 'Growth'],
    linkedin: 'https://linkedin.com/in/carlosferreira'
  },
  {
    id: '6',
    name: 'Lucia Mendes',
    role: 'Community Manager',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&auto=format&fit=crop',
    tags: ['Community', 'Marketing', 'Content'],
    twitter: 'https://twitter.com/luciamendes'
  }
]

export function filterMembers(
  members: Member[],
  searchQuery: string,
  filters: string[]
): Member[] {
  let filtered = members

  // Search by name or role
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filtered = filtered.filter(
      m => m.name.toLowerCase().includes(query) ||
        m.role.toLowerCase().includes(query)
    )
  }

  // Filter by tags
  if (filters.length > 0) {
    filtered = filtered.filter(m =>
      filters.every(filter => m.tags.includes(filter))
    )
  }

  // Sort: Core Team first, then alphabetically
  return filtered.sort((a, b) => {
    const aCore = a.tags.includes('Core Team')
    const bCore = b.tags.includes('Core Team')
    if (aCore && !bCore) return -1
    if (!aCore && bCore) return 1
    return a.name.localeCompare(b.name)
  })
}