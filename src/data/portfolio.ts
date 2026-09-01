// Fonte única de todo o texto visível do site.
// Qualquer alteração aqui precisa estar refletida em CONTEUDO-PORTFOLIO.md.

export interface NavItem {
  id: string
  label: string
}

export interface CtaLink {
  label: string
  href: string
}

export interface Hero {
  title: string
  subtitle: string
  primaryCta: { label: string; targetId: string }
  secondaryCta: CtaLink
}

export interface About {
  heading: string
  paragraphs: string[]
}

export interface TechCategory {
  id: string
  title: string
  items: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  title: string
  /** Contexto do projeto: cliente, vínculo e situação. */
  context: string
  description: string
  tech: string[]
  image?: string
  links?: ProjectLink[]
  /** Exibido quando o projeto é de código fechado e não tem link público. */
  restrictedLabel?: string
}

export interface ProjectGroup {
  id: string
  title: string
  projects: Project[]
}

export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export interface ContactLink {
  id: "github" | "linkedin" | "email"
  label: string
  href: string
}

export interface Contact {
  heading: string
  lines: string[]
  links: ContactLink[]
  resume: CtaLink
}

export interface PortfolioContent {
  meta: { title: string; description: string }
  brand: string
  nav: NavItem[]
  hero: Hero
  about: About
  tech: { heading: string; categories: TechCategory[] }
  projects: { heading: string; groups: ProjectGroup[] }
  experience: { heading: string; items: Experience[] }
  contact: Contact
}

const RESTRICTED = "Projeto interno — acesso restrito"

export const portfolio: PortfolioContent = {
  meta: {
    title: "Lucas Gabriel Kuligowski — Desenvolvedor Full Stack",
    description:
      "Laravel e Next.js, do modelo de dados ao deploy em produção. Quatro sistemas no ar com usuários reais, em infraestrutura que eu mesmo provisiono e mantenho.",
  },

  brand: "Lucas Kuligowski",

  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "tecnologias", label: "Tecnologias" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "contato", label: "Contato" },
  ],

  hero: {
    title: "Desenvolvedor Full Stack",
    subtitle:
      "Laravel e Next.js, do modelo de dados ao deploy em produção. Quatro sistemas no ar com usuários reais, em infraestrutura que eu mesmo provisiono e mantenho.",
    primaryCta: { label: "Ver Projetos", targetId: "projetos" },
    secondaryCta: { label: "Baixar Currículo", href: "/curriculo-lucas-kuligowski.pdf" },
  },

  about: {
    heading: "Sobre",
    paragraphs: [
      "Sou desenvolvedor full stack com 2 anos de experiência, focado em back-end Laravel/PHP e front-end Next.js/React/TypeScript. Trabalho de ponta a ponta: modelagem de dados, testes automatizados, Docker, CI/CD e deploy próprio em nuvem.",
      "Tenho quatro sistemas em produção com usuários reais. Entre eles um SaaS de saúde mental que construí do zero, com 204 testes automatizados, criptografia AES-256 no diário do paciente e conformidade com a LGPD; e dois sistemas freelance entregues a clientes — uma clínica de optometria e uma academia de jiu-jítsu.",
      "Na Tuxon Soluções Web mantive e evoluí um ERP com mais de 200 tabelas relacionais, onde conduzi sozinho a migração de Laravel 9 para 12. Antes disso, passei por estágios na Inffus e na Sites 10, com integrações de APIs, automação com IA e SEO técnico.",
      "Formado em Análise e Desenvolvimento de Sistemas pela PUCPR, com técnico em Informática pelo IFPR. Inglês C1 certificado (EF SET).",
    ],
  },

  tech: {
    heading: "Tecnologias",
    categories: [
      {
        id: "back-end",
        title: "Back-end",
        items: [
          "Laravel",
          "PHP",
          "Inertia.js",
          "Filament",
          "Sanctum",
          "Fortify",
          "REST API",
          "Redis",
          "PHPUnit/Pest",
        ],
      },
      {
        id: "front-end",
        title: "Front-end",
        items: [
          "Next.js",
          "React",
          "Vue 3",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "shadcn/ui",
          "TanStack Query",
          "SSR/SSG",
        ],
      },
      {
        id: "bancos-de-dados",
        title: "Bancos de dados",
        items: ["PostgreSQL", "MySQL", "Supabase", "SQLite", "Modelagem relacional"],
      },
      {
        id: "infra-deploy",
        title: "Infra & Deploy",
        items: ["Docker", "Linux", "nginx", "Oracle Cloud", "Vercel", "GitHub Actions", "Let's Encrypt"],
      },
      {
        id: "testes-qualidade",
        title: "Testes & Qualidade",
        items: ["PHPUnit/Pest", "Vitest", "Jest/RTL", "Playwright", "Larastan", "Code review"],
      },
      {
        id: "seo-ferramentas",
        title: "SEO & Ferramentas",
        items: [
          "GA4",
          "Google Search Console",
          "Lighthouse",
          "schema.org",
          "Git",
          "GitHub",
          "npm",
          "Postman/Insomnia",
        ],
      },
    ],
  },

  projects: {
    heading: "Projetos",
    groups: [
      {
        id: "sistemas-em-producao",
        title: "Sistemas em produção",
        projects: [
          {
            title: "MindCat — SaaS de continuidade em saúde mental",
            context: "Produto próprio · em produção",
            description:
              "Plataforma que conecta pacientes e psicólogos entre as sessões: acompanhamento de humor, diário criptografado, tarefas terapêuticas e validação de credenciais profissionais (CRP/e-Psi). Back-end Laravel com service layer desacoplada e 204 testes; diário com criptografia AES-256 em chave dedicada e senha própria; conformidade com a LGPD. Deploy próprio em VM ARM na Oracle Cloud.",
            tech: ["Laravel", "PHP", "Next.js", "TypeScript", "PostgreSQL"],
            links: [
              { label: "Ver sistema", href: "https://mindcat.com.br" },
              { label: "Código (API)", href: "https://github.com/Kuligowskilucas/MindCatApi" },
              { label: "Código (Web)", href: "https://github.com/Kuligowskilucas/MindCatWeb" },
            ],
          },
          {
            title: "Fovea — Gestão para clínica de optometria",
            context: "Freelance · em produção",
            description:
              "Sistema desenhado para o fluxo de um profissional único que atende, examina e prescreve pelo celular. Prontuário com exame optométrico estruturado em blocos e receituário com medidas por olho e impressão com cabeçalho configurável. Laravel 13 + Inertia.js + React 19, com Pest e análise estática.",
            tech: ["Laravel", "Inertia.js", "React", "PostgreSQL"],
            links: [{ label: "Código", href: "https://github.com/Kuligowskilucas/fovea" }],
          },
          {
            title: "Fight House Club — Gestão de mensalidades",
            context: "Freelance · em produção desde maio de 2026",
            description:
              "Substituiu o controle em caderno de papel de cerca de 60 alunos de uma academia de jiu-jítsu. Cobrança recorrente automática via comando agendado idempotente, controle de inadimplência e painel financeiro. Entregue em 3 semanas, com custo operacional zero. 41 testes de feature e CI no GitHub Actions.",
            tech: ["Laravel", "Next.js", "TypeScript", "PostgreSQL"],
            links: [
              { label: "Código (API)", href: "https://github.com/Kuligowskilucas/fighthouse-api" },
              { label: "Código (Web)", href: "https://github.com/Kuligowskilucas/fighthouse-web" },
            ],
          },
          {
            title: "Sistema Ágape — Gestão para clínica psiquiátrica",
            context: "Projeto de extensão PUCPR · equipe de 4",
            description:
              "Sistema para clínica psiquiátrica real: gestão de pacientes, agendamento e prontuário clínico. Controle de acesso por perfil (RBAC, 4 perfis), logs de auditoria e conformidade com a LGPD por tratar de dados sensíveis de saúde. Atuei no back-end e na modelagem até a implantação.",
            tech: ["Laravel", "PostgreSQL", "TypeScript"],
            links: [
              { label: "Código", href: "https://github.com/Kuligowskilucas/clinica-psiquiatrica-backend" },
            ],
          },
        ],
      },
      {
        id: "funcionalidades-tecnicas",
        title: "Funcionalidades técnicas & integrações",
        projects: [
          {
            title: "Migração Laravel 9 → 12 (ERP Horsch)",
            context: "Tuxon Soluções Web",
            description:
              "Migração do ERP Horsch, com mais de 200 tabelas relacionais, de Laravel 9 para 12: breaking changes em autenticação, Eloquent e middleware, atualização do grafo de dependências e validação de regressões. Também resolvi um problema recorrente de cache de JS no front.",
            tech: ["Laravel", "PHP", "Docker", "MySQL"],
            image: "/images/horsch.png",
            restrictedLabel: RESTRICTED,
          },
          {
            title: "Módulo de Assentamentos — Sistema de Chamados",
            context: "Tuxon Soluções Web",
            description:
              "Módulo construído do zero no sistema de chamados interno: modelagem de dados, CRUD completo, vínculo com chamados, histórico de alterações e interface administrativa em Filament. Entreguei um fluxo que antes não existia no sistema.",
            tech: ["Laravel", "Filament", "MySQL", "PHP"],
            image: "/images/chamados.png",
            restrictedLabel: RESTRICTED,
          },
          {
            title: "AutoBusiness CMS",
            context: "Inffus",
            description:
              "Pipeline de geração de anúncios com IA (OpenAI): copy produzido a partir de dados estruturados do veículo, com revisão humana apenas na etapa final. Também construí um módulo reutilizável de rastreamento de UTMs com validação automática, distribuído via registry privado e reaproveitado por cerca de 10 sites da carteira.",
            tech: ["JavaScript", "Node.js", "OpenAI API", "NPM"],
            image: "/images/crm.png",
            links: [{ label: "Ver site", href: "https://app.autobusiness.com.br/" }],
          },
          {
            title: "Porto Camargo",
            context: "Inffus",
            description:
              "Integração da API do sistema imobiliário CVCRM ao site institucional da Porto Camargo, permitindo exibição dinâmica e automatizada de empreendimentos.",
            tech: ["JavaScript", "API", "HTML", "CSS"],
            image: "/images/portocamargo.png",
            links: [{ label: "Ver site", href: "https://portocamargo.com.br/" }],
          },
        ],
      },
      {
        id: "sites-desenvolvidos",
        title: "Sites desenvolvidos",
        projects: [
          {
            title: "BoraSelect",
            context: "Inffus · Programação das páginas internas",
            description:
              "Implementação das páginas internas com foco em performance e consistência visual. Projeto institucional desenvolvido pela Inffus.",
            tech: ["Next.js", "Tailwind CSS"],
            image: "/images/boraselect.png",
            links: [{ label: "Ver site", href: "https://boraselect.com.br/" }],
          },
          {
            title: "DEX Engenharia",
            context: "Sites 10 · Programação completa",
            description:
              "Site institucional voltado à engenharia industrial, com foco técnico, performance e clareza. Programado em parceria com a agência Sites 10.",
            tech: ["PHP", "JavaScript", "HTML", "CSS"],
            image: "/images/dex.png",
            links: [{ label: "Ver site", href: "https://www.gdex.com.br/" }],
          },
        ],
      },
    ],
  },

  experience: {
    heading: "Experiência",
    items: [
      {
        company: "Freelance",
        role: "Desenvolvedor Full Stack",
        period: "Abril 2026 – Junho 2026",
        highlights: [
          "Fovea: sistema de gestão para clínica de optometria, em produção.",
          "Fight House Club: gestão de mensalidades para academia de jiu-jítsu, em produção em 3 semanas e em uso real.",
          "Infraestrutura provisionada do zero nos dois: Oracle Cloud (Ubuntu, nginx + PHP-FPM), firewall em duas camadas, SSL e agendamento via cron.",
        ],
      },
      {
        company: "Tuxon Soluções Web",
        role: "Desenvolvedor Full Stack",
        period: "Setembro 2025 – Março 2026",
        highlights: [
          "Manutenção e evolução do ERP Horsch (mais de 200 tabelas relacionais): rastreamento de ativos por ID único, ordens de compra e venda e CRM com scoring de temperatura de negociação.",
          "Conduzi sozinho a migração de Laravel 9 para 12.",
          "Construí do zero o módulo de Assentamentos, entregando um fluxo que antes não existia no sistema.",
          "Padronizei o ambiente de desenvolvimento com Docker.",
        ],
      },
      {
        company: "Inffus",
        role: "Desenvolvedor Full Stack (estágio)",
        period: "Dezembro 2024 – Agosto 2025",
        highlights: [
          "Pipeline de geração de anúncios com IA (OpenAI) no CMS AutoBusiness.",
          "Módulo reutilizável de rastreamento de UTMs com validação automática, reaproveitado por cerca de 10 sites da carteira.",
          "Integração da API do CVCRM ao site Porto Camargo e migração de propriedades de marketing para Next.js (SSR/SSG).",
        ],
      },
      {
        company: "Sites 10",
        role: "Desenvolvedor Front-end (estágio)",
        period: "Março 2024 – Dezembro 2024",
        highlights: [
          "Sites institucionais responsivos com PageSpeed acima de 90 e Práticas Recomendadas 100.",
          "SEO técnico: schema.org, sitemaps e Core Web Vitals.",
          "Refatoração de sites legados com lazy-loading, CDN e redução de payload JS.",
        ],
      },
    ],
  },

  contact: {
    heading: "Contato",
    lines: [
      "Curitiba, PR · Remoto (UTC-3) ou presencial em Curitiba",
      "Disponível para vagas CLT ou PJ",
    ],
    links: [
      { id: "github", label: "GitHub", href: "https://github.com/Kuligowskilucas" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/lucas-kuligowski" },
      { id: "email", label: "Email", href: "mailto:lucaskuligowski@gmail.com" },
    ],
    resume: { label: "Baixar Currículo", href: "/curriculo-lucas-kuligowski.pdf" },
  },
}
