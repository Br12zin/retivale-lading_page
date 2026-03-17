// src/components/Historia.tsx
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export function Historia() {
  const diferenciais = [
    'Precisão milimétrica em cada serviço',
    'Garantia de qualidade certificada',
    'Atendimento personalizado',
    'Prazos confiáveis e transparentes'
  ]

  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tradição que Move Gerações
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fundada em 1989 por José Antonio Silva, a Retífica Silva nasceu do sonho de oferecer 
              serviços de retífica automotiva com qualidade incomparável. O que começou em um 
              pequeno galpão transformou-se em uma das retíficas mais respeitadas da região.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Hoje, com três gerações trabalhando lado a lado, unimos a experiência tradicional 
              com a inovação tecnológica. Cada membro da família traz sua expertise única, 
              garantindo que cada motor receba o tratamento perfeito.
            </p>

            <div className="space-y-3">
              {diferenciais.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10"></div>
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              {/* Placeholder para imagem - substitua pela imagem real */}
              <span className="text-gray-600">Imagem da oficina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}