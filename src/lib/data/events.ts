export interface Event {
  id: string
  title: string
  date: string
  location: string
  type: 'hackathon' | 'workshop' | 'meetup' | 'conference'
  image: string
  registrationUrl?: string
}

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Solana Buildathon Brazil',
    date: '2026-02-15',
    location: 'São Paulo, SP',
    type: 'hackathon',
    image: '/events/buildathon.png',
    registrationUrl: 'https://luma.com/superteambrasil?period=past'
  },
  {
    id: '2',
    title: 'Rust & Anchor Workshop',
    date: '2026-01-25',
    location: 'Rio de Janeiro, RJ',
    type: 'workshop',
    image: '/events/rust-workshop.png',
    registrationUrl: 'https://luma.com/superteambrasil?period=past'
  },
  {
    id: '3',
    title: 'Web3 Community Meetup',
    date: '2026-01-30',
    location: 'Belo Horizonte, MG',
    type: 'meetup',
    image: '/events/meetup.png',
    registrationUrl: 'https://luma.com/superteambrasil?period=past'
  }
]