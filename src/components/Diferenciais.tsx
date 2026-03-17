// src/components/Diferenciais.tsx
import { Cpu, Award, Users, TrendingUp } from 'lucide-react'

export function Diferenciais() {
  const diferenciais = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos CNC e sistemas de medição digital de última geração"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certificação ISO",
      description: "Processos certificados que garantem a máxima qualidade"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expertise Familiar",
      description: "35 anos de experiência transmitida através de gerações"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Inovação Contínua",
      description: "Investimento constante em tecnologia e capacitação"
    }
  ]

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            O que nos torna referência em retífica automotiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group"
            >
              <div className="text-red-600 mb-4 group-hover:scale-110 transition transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}