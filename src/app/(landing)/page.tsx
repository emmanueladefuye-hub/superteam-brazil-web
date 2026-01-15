import { Navbar } from '@/components/shared/Navbar'
import { HeroSection } from './components/HeroSection'
import { MissionSection } from './components/MissionSection'
import { StatsSection } from './components/StatsSection'
import { EventsSection } from './components/EventsSection'
import { MembersPreview } from './components/MembersPreview'
import { PartnersSection } from './components/PartnersSection'
import { TweetsSection } from './components/TweetsSection'
import { FAQSection } from './components/FAQSection'
import { JoinCTASection } from './components/JoinCTASection'
import { Footer } from './components/Footer'
import { ValuePropSection } from './components/ValuePropSection'
import { MemberPerksSection } from './components/MemberPerksSection'
import { ResourcesSection } from './components/ResourcesSection'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ValuePropSection />
      <MissionSection />
      <StatsSection />
      <MemberPerksSection />
      <EventsSection />
      <MembersPreview />
      <ResourcesSection />
      <TweetsSection />
      <FAQSection />
      <JoinCTASection />
      <Footer />
    </main>
  )
}