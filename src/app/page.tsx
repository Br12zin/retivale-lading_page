// src/app/page.tsx
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Historia } from '../components/Historia'
import { Diferenciais } from '../components/Diferenciais'
import { MissaoValores } from '../components/MissaoValores'
import { Familia } from '../components/Familia'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Historia />
      <Diferenciais />
      <MissaoValores />
      <Familia />
      <Footer />
    </main>
  )
}