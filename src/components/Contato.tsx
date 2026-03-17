// src/components/Contato.tsx
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pronto para Restaurar Seu Motor?
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato conosco e descubra como podemos ajudar a devolver a performance 
              e confiabilidade do seu veículo.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Phone className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">(11) 4567-8900</p>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">contato@retificasilva.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Rua das Indústrias, 1234</p>
                  <p className="text-gray-600">São Paulo - SP, 01234-567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Fale Conosco
              </Link>
              <Link 
                href="#" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}