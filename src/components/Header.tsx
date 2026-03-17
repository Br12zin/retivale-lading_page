'use client'
// src/components/Header.tsx
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const scrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const footer = document.getElementById('footer')
    if (footer) {
      const headerOffset = 80
      const elementPosition = footer.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl">RL</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Retivale</h1>
              <p className="text-xs text-gray-400">Desde 1989</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#historia" 
              onClick={(e) => scrollToSection(e, 'historia')}
              className="hover:text-red-500 transition cursor-pointer"
            >
              História
            </a>
            <a 
              href="#diferenciais" 
              onClick={(e) => scrollToSection(e, 'diferenciais')}
              className="hover:text-red-500 transition cursor-pointer"
            >
              Diferenciais
            </a>
            <a 
              href="#familia" 
              onClick={(e) => scrollToSection(e, 'familia')}
              className="hover:text-red-500 transition cursor-pointer"
            >
              Família
            </a>
            {/* Link Contato - AGORA LEVA AO FOOTER */}
            <a 
              href="#footer" 
              onClick={scrollToFooter}
              className="hover:text-red-500 transition cursor-pointer"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#historia" 
                onClick={(e) => scrollToSection(e, 'historia')}
                className="hover:text-red-500 transition cursor-pointer"
              >
                História
              </a>
              <a 
                href="#diferenciais" 
                onClick={(e) => scrollToSection(e, 'diferenciais')}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Diferenciais
              </a>
              <a 
                href="#familia" 
                onClick={(e) => scrollToSection(e, 'familia')}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Família
              </a>
              {/* Link Contato no mobile - AGORA LEVA AO FOOTER */}
              <a 
                href="#footer" 
                onClick={scrollToFooter}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}