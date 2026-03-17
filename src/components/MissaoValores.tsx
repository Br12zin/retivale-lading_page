// src/components/MissaoValores.tsx
import { Target, Heart, Shield, Users } from 'lucide-react'

export function MissaoValores() {
  const valores = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Qualidade Absoluta",
      description: "Não aceitamos meio-termo. Cada peça é medida, verificada e testada para garantir perfeição."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inovação Contínua",
      description: "Investimos constantemente em tecnologia e capacitação para oferecer o melhor serviço do mercado."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Relação de Confiança",
      description: "Construímos relacionamentos duradouros baseados em transparência, honestidade e resultados."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Missão */}
          <div className="bg-gray-900 text-white p-12 rounded-lg">
            <Users className="w-16 h-16 text-red-500 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Missão e Valores</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Nossa missão é restaurar motores com precisão cirúrgica, devolvendo a vida 
              e performance aos veículos de nossos clientes. Acreditamos que cada motor 
              conta uma história, e nosso papel é garantir que essa história continue.
            </p>
          </div>

          {/* Valores */}
          <div className="space-y-6">
            {valores.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                <div className="text-red-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}