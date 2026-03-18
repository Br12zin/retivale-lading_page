// src/components/Familia.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { membrosFamilia } from '../data/familia'

export function Familia() {
  // Pegando apenas os 5 principais para exibir na página inicial
  const membrosPrincipais = membrosFamilia.slice(0, 5)

  return (
    <section id="familia" className="py-20 bg-gray-50">
      <div className="container-custom max-w-7xl lg:max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Família
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Conheça as pessoas que dedicam suas vidas à excelência em retífica automotiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {membrosPrincipais.map((membro) => (
            <div 
              key={membro.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10"
            >
              <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                {/* Placeholder para imagem com iniciais */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">
                      {membro.nome.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Nome e cargo no overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-xl font-bold mb-1">{membro.nome}</h3>
                  <p className="text-red-300 font-semibold">{membro.cargo}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Experiência</span>
                  <p className="text-2xl font-bold text-gray-900">{membro.anosExperiencia} anos</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Especializações</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {membro.especializacoes.slice(0, 2).map((esp, idx) => (
                      <span key={idx} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full transition-colors duration-300 group-hover:bg-red-200">
                        {esp}
                      </span>
                    ))}
                    {membro.especializacoes.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-colors duration-300 group-hover:bg-gray-200">
                        +{membro.especializacoes.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <Link 
                  href={`/familia/${membro.id}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group/link"
                >
                  <span className="relative">
                    Ver história completa
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:scale-110" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Link para ver todos (se houver mais) */}
        {membrosFamilia.length > 4 && (
          <div className="text-center mt-12">
            <Link 
              href="/familia"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            >
              <span>Conhecer toda a família</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}