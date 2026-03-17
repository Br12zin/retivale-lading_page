// src/app/familia/[id]/not-found.tsx
import Link from 'next/link'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export default function MembroNotFound() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-16">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Membro não encontrado
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              O membro da família que você está procurando não existe ou foi removido.
            </p>
            <Link 
              href="/#familia"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Voltar para a Família
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}