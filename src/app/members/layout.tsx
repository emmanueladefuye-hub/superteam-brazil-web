import { Navbar } from '@/components/shared/Navbar'

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#0A0A0A', color: '#FAFAFA'}}>
      <Navbar />
      {children}
    </main>
  )
}