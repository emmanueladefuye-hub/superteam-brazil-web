'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from './Button'
import { Logo } from './Logo'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#mission', label: 'Mission' },
    { href: '/#events', label: 'Events' },
    { href: '/members', label: 'Members' },
    { href: '/#faq', label: 'FAQ' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Logo size={48} className="transition-transform duration-500 group-hover:scale-110" />
            <span className="text-xl font-display font-bold text-white group-hover:text-superteam-purple transition-colors duration-500 tracking-tight">
              Superteam Brazil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm font-bold uppercase tracking-widest text-foreground/60 hover:text-white transition-all duration-500 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-5 right-5 h-px bg-superteam-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-white/10">
              <Button
                size="sm"
                className="rounded-xl glow-purple group"
                onClick={() => window.open('https://luma.com/superteambrasil?period=past', '_blank')}
              >
                Join Community
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 text-foreground/70 hover:text-white glass rounded-xl border-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="w-full px-6 flex flex-col items-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl sm:text-5xl font-display font-bold text-foreground/40 hover:text-white transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs pt-8 border-t border-white/5"
              >
                <Button
                  className="w-full h-16 text-xl rounded-2xl glow-purple font-bold"
                  onClick={() => window.open('https://luma.com/superteambrasil?period=past', '_blank')}
                >
                  Join Community
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}