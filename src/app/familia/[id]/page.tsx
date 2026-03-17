// src/app/familia/[id]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Phone, Mail, Award, Briefcase, Calendar } from 'lucide-react'
import { membrosFamilia } from '../../../data/familia'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function MembroFamiliaPage({ params }: PageProps) {
  const { id } = await params
  const membro = membrosFamilia.find(m => m.id === id)

  if (!membro) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section com nome e cargo */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <Link 
            href="/#familia" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition" />
            Voltar para Família
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            {/* Avatar/Foto */}
            <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
              <span className="text-white font-bold text-5xl">
                {membro.nome.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{membro.nomeCompleto}</h1>
              <p className="text-xl text-red-300 font-semibold mb-4">{membro.cargo}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 mr-2 text-red-300" />
                  {membro.anosExperiencia} anos de experiência
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Coluna Principal - 2/3 */}
            <div className="lg:col-span-2 space-y-8">
              {/* Trajetória Profissional */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-red-600" />
                  Trajetória Profissional
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {membro.trajetoria}
                </p>
                
                {membro.citacao && (
                  <div className="mt-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                    <p className="text-gray-800 italic text-lg">
                      "{membro.citacao}"
                    </p>
                  </div>
                )}
              </div>

              {/* Especializações */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-red-600" />
                  Especializações
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {membro.especializacoes.map((esp, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-600 font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{esp}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1/3 */}
            <div className="space-y-6">
              {/* Card de Contato */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contato</h3>
                {membro.contato?.telefone && (
                  <div className="flex items-center space-x-3 mb-3 text-gray-600 hover:text-red-600 transition">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{membro.contato.telefone}</span>
                  </div>
                )}
                {membro.contato?.email && (
                  <div className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="break-all">{membro.contato.email}</span>
                  </div>
                )}
              </div>

              {/* Card Resumo */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">RETÍFICA SILVA</h3>
                <p className="text-gray-300 mb-6">
                  Há mais de 30 anos transformando precisão em confiança. 
                  Tradição familiar aliada à tecnologia de ponta.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">Políticas</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><Link href="#" className="hover:text-red-400 transition">Política de Privacidade</Link></li>
                    <li><Link href="#" className="hover:text-red-400 transition">Termos de Serviço</Link></li>
                    <li><Link href="#" className="hover:text-red-400 transition">Garantia de Serviços</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Outros Membros da Família */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Outros membros da família</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {membrosFamilia
                .filter(m => m.id !== membro.id)
                .slice(0, 4)
                .map((outroMembro) => (
                  <Link 
                    key={outroMembro.id}
                    href={`/familia/${outroMembro.id}`}
                    className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {outroMembro.nome.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition">
                          {outroMembro.nome}
                        </h4>
                        <p className="text-sm text-gray-500">{outroMembro.cargo}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}