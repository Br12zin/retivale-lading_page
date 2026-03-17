// src/components/Footer.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <div id="footer">
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="font-bold">RS</span>
              </div>
              <h3 className="font-bold text-xl">Retífica Silva</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Há mais de 35 anos oferecendo serviços de retífica automotiva com excelência, 
              precisão e compromisso com a qualidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition">Início</Link></li>
              <li><Link href="#historia" className="text-gray-400 hover:text-red-500 transition">Sobre a empresa</Link></li>
              <li><Link href="/#diferenciais" className="text-gray-400 hover:text-red-500 transition">Políticas</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  (11) 4567-8900<br />
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">contato@retivale.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Rua das Indústrias, 1234<br />
                  São Paulo - SP, 01234-567
                </span>
              </li>
            </ul>
          </div>

          {/* Responsáveis */}
          <div>
            <h4 className="font-bold text-lg mb-4">Responsáveis</h4>
            <ul className="space-y-2">
              <li>
                <p className="font-semibold">José Antonio Silva</p>
                <p className="text-gray-400 text-sm">(11) 98888-7777</p>
              </li>
              <li>
                <p className="font-semibold">Carlos Eduardo Silva</p>
                <p className="text-gray-400 text-sm">(11) 97777-6666</p>
              </li>
              <li>
                <p className="font-semibold">Maria Helena Silva</p>
                <p className="text-gray-400 text-sm">(11) 96666-5555</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2026 Retivale. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}