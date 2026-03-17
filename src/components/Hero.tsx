'use client'
// src/components/Hero.tsx
import { ArrowRight } from 'lucide-react'

export function Hero() {
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
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo grande */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="font-bold text-4xl">RS</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Retivale
          </h1>
          <p className="text-xl text-red-400 mb-4">Desde 1989</p>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
            Três gerações de excelência em retífica automotiva. 
            <span className="block mt-2 text-white">Tradição familiar aliada à tecnologia de ponta para entregar motores perfeitos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#historia"
              onClick={(e) => scrollToSection(e, 'historia')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 cursor-pointer"
            >
              Conheça Nossa História
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - leva para história */}
      <a 
        href="#historia"
        onClick={(e) => scrollToSection(e, 'historia')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </a>
    </section>
  )
}