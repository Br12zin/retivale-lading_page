// Versão com botão mais destacado
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { membrosFamilia } from '../../data/familia'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function FamiliaPage() {
  const router = useRouter()

  const handleVoltar = () => {
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          {/* Botão Voltar Destacado */}
          <div className="mb-8">
            <button 
              onClick={handleVoltar}
              className="inline-flex items-center hover:bg-red-600 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition" />
              Voltar para página inicial
            </button>
          </div>

          {/* Resto do conteúdo igual... */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossa Família
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Conheça todos os membros da família que dedicam suas vidas à excelência em retífica automotiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membrosFamilia.map((membro) => (
              <Link 
                key={membro.id}
                href={`/familia/${membro.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">
                        {membro.nome.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{membro.nome}</h3>
                    <p className="text-red-300 font-semibold">{membro.cargo}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {membro.trajetoria.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center text-red-600 font-semibold group">
                    Ver história completa
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}