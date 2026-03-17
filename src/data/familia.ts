// src/data/familia.ts
export interface MembroFamilia {
  id: string
  nome: string
  nomeCompleto: string
  cargo: string
  imagem: string
  anosExperiencia: number
  especializacoes: string[]
  trajetoria: string
  citacao?: string
  contato?: {
    telefone?: string
    email?: string
  }
}

export const membrosFamilia: MembroFamilia[] = [
  {
    id: "jose-antonio-silva",
    nome: "José Antonio Silva",
    nomeCompleto: "José Antonio Silva",
    cargo: "Sócio Fundador",
    imagem: "/images/familia/jose.jpg",
    anosExperiencia: 35,
    especializacoes: [
      "Motores a diesel",
      "Gestão empresarial",
      "Qualidade total"
    ],
    trajetoria: "Fundador da Retífica Silva em 1989, José Antonio começou sua carreira como mecânico em uma pequena oficina no bairro do Ipiranga. Sua paixão por motores e seu olhar clínico para diagnósticos precisos rapidamente o tornaram referência na região. Ao longo de 35 anos, construiu não apenas um negócio, mas uma instituição familiar baseada em valores de honestidade, trabalho duro e excelência técnica. Hoje, aos 68 anos, continua presente diariamente na empresa, orientando as novas gerações e compartilhando seu conhecimento acumulado.",
    citacao: "Cada motor tem uma história, e nosso trabalho é garantir que essa história continue por muitos quilômetros.",
    contato: {
      telefone: "(11) 98888-7777",
      email: "jose.silva@retificasilva.com.br"
    }
  },
  {
    id: "carlos-eduardo-silva",
    nome: "Carlos Eduardo Silva",
    nomeCompleto: "Carlos Eduardo Silva",
    cargo: "Diretor Técnico",
    imagem: "/images/familia/carlos.jpg",
    anosExperiencia: 20,
    especializacoes: [
      "Motores de alta performance",
      "Turbinas",
      "Controle de qualidade"
    ],
    trajetoria: "Filho mais velho de José Antonio, Carlos Eduardo é engenheiro mecânico formado pela USP com especialização em motores de competição na Alemanha. Conhecido pela sua capacidade de diagnóstico preciso e inovação técnica, ele trouxe para a empresa uma abordagem científica à retífica, implementando controles de qualidade rigorosos e processos padronizados que elevaram o nível dos serviços oferecidos. É responsável pela implementação dos equipamentos CNC e pela certificação ISO da empresa.",
    citacao: "Precisão não é um detalhe, é a diferença entre um motor que funciona e um motor que voa.",
    contato: {
      telefone: "(11) 97777-6666",
      email: "carlos.silva@retificasilva.com.br"
    }
  },
  {
    id: "maria-helena-silva",
    nome: "Maria Helena Silva",
    nomeCompleto: "Maria Helena Silva",
    cargo: "Diretora Administrativa",
    imagem: "/images/familia/maria.jpg",
    anosExperiencia: 18,
    especializacoes: [
      "Gestão financeira",
      "Atendimento ao cliente",
      "Planejamento estratégico"
    ],
    trajetoria: "Maria Helena é a filha do meio e o coração administrativo da Retífica Silva. Formada em Administração de Empresas com MBA em Gestão de Negócios, ela é responsável por toda a estrutura que permite que a parte técnica funcione com excelência. Implementou sistemas de gestão modernos, treinou a equipe de atendimento e criou uma cultura organizacional que valoriza tanto a tradição quanto a inovação. Sua abordagem humanizada fez com que a empresa seja conhecida não apenas pela qualidade técnica, mas também pelo tratamento familiar dispensado a cada cliente.",
    citacao: "Por trás de cada motor que passa por aqui, há uma pessoa com uma história. Nosso trabalho é cuidar de ambos.",
    contato: {
      telefone: "(11) 96666-5555",
      email: "maria.silva@retificasilva.com.br"
    }
  },
  {
    id: "ana-paula-silva",
    nome: "Ana Paula Silva",
    nomeCompleto: "Ana Paula Silva",
    cargo: "Gerente de Qualidade",
    imagem: "/images/familia/ana.jpg",
    anosExperiencia: 12,
    especializacoes: [
      "Metrologia avançada",
      "Certificações ISO",
      "Auditoria de processos"
    ],
    trajetoria: "A caçula da família, Ana Paula, é engenheira de produção com especialização em gestão da qualidade. Depois de trabalhar em indústrias multinacionais, trouxe sua expertise para o negócio familiar, implementando um sistema de gestão da qualidade que rivaliza com as melhores empresas do setor. É responsável por garantir que cada peça que sai da retífica atenda aos mais rigorosos padrões de qualidade. Sua atenção aos detalhes e seu compromisso com a melhoria contínua têm sido fundamentais para o reconhecimento que a empresa recebe.",
    citacao: "Qualidade não é um acidente, é o resultado de intenção, esforço e direção correta.",
    contato: {
      telefone: "(11) 95555-4444",
      email: "ana.silva@retificasilva.com.br"
    }
  },
  {
    id: "lucas-silva",
    nome: "Lucas Silva",
    nomeCompleto: "Lucas Silva",
    cargo: "Especialista",
    imagem: "/images/familia/lucas.jpg",
    anosExperiencia: 8,
    especializacoes: [
      "Injeção eletrônica",
      "Motores flex",
      "Diagnóstico computadorizado"
    ],
    trajetoria: "Lucas é o mais novo da terceira geração a se juntar à equipe fixa da Retífica Silva. Formado em Engenharia Mecatrônica, ele representa a ponte entre a tradição da família e as novas tecnologias automotivas. Especialista em sistemas de injeção eletrônica e diagnósticos computadorizados, Lucas tem sido fundamental para modernizar os processos de diagnóstico e expandir os serviços da empresa para veículos mais modernos. Sua abordagem jovem e inovadora tem atraído uma nova geração de clientes.",
    citacao: "Respeitar o passado, abraçar o futuro. Cada motor tem sua evolução e nós evoluímos com ele.",
    contato: {
      telefone: "(11) 94444-3333",
      email: "lucas.silva@retificasilva.com.br"
    }
  }
]