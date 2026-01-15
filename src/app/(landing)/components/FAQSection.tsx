'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is Superteam Brazil?',
    answer: 'Superteam Brazil is the official Brazilian chapter of Superteam - a global network supporting builders in the Solana ecosystem. We connect developers, designers, and creators with opportunities, funding, and mentorship.'
  },
  {
    question: 'How do I become a member?',
    answer: 'The best way is to join our Telegram community and start contributing to bounties or attending our events. Active community members who consistently contribute to the ecosystem are invited to join the core community.'
  },
  {
    question: 'What kind of support can I get?',
    answer: 'We provide equity-free grants, access to global Solana hackathons, individual mentorship from experienced founders, and direct intros to top Web3 companies for jobs and bounties.'
  },
  {
    question: 'Is it free to join?',
    answer: 'Yes, joining the community and participating in our public events and bounties is completely free. We are a community-driven organization focused on talent development.'
  },
  {
    question: 'Do I need to be a developer?',
    answer: 'Absolutely not! While we have a strong developer base, we also need designers, content creators, researchers, and community managers. If you want to build in Web3, you belong here.'
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-superteam-purple text-sm font-bold uppercase tracking-wider mb-6">
            <HelpCircle size={16} />
            Support
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-xl text-foreground/60">
            Everything you need to know about joining Superteam Brazil.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-white/5 rounded-2xl px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-superteam-purple/30 data-[state=open]:bg-white/[0.05]"
              >
                <AccordionTrigger className="text-left text-xl font-display font-bold py-6 hover:no-underline hover:text-superteam-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/50 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}