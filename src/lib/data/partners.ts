export interface Partner {
    id: string
    name: string
    logo: string
    url: string
    category: 'ecosystem' | 'venture' | 'infrastructure'
}

export const partners: Partner[] = [
    {
        id: 'solana',
        name: 'Solana Foundation',
        logo: '/logos/solana.svg',
        url: 'https://solana.foundation',
        category: 'ecosystem',
    },
    {
        id: 'jump',
        name: 'Jump Crypto',
        logo: '/logos/jump.svg',
        url: 'https://jumpcrypto.com',
        category: 'venture',
    },
    {
        id: 'multicoin',
        name: 'Multicoin Capital',
        logo: '/logos/multicoin.svg',
        url: 'https://multicoin.capital',
        category: 'venture',
    },
    {
        id: 'alchemy',
        name: 'Alchemy',
        logo: '/logos/alchemy.svg',
        url: 'https://alchemy.com',
        category: 'infrastructure',
    },
    {
        id: 'metaplex',
        name: 'Metaplex',
        logo: '/logos/metaplex.svg',
        url: 'https://metaplex.com',
        category: 'ecosystem',
    },
    {
        id: 'pyth',
        name: 'Pyth Network',
        logo: '/logos/pyth.svg',
        url: 'https://pyth.network',
        category: 'infrastructure',
    },
]
