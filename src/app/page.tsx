"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code2, Database, Settings, ChevronDown, Server, BarChart3 } from "lucide-react"
import { ProjectSection } from "@/components/ui/ProjectSection"

export default function Portfolio() {
  const [, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const techStacks = {
    "Front-end": ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "SSR/SSG"],
    "Back-end": ["Laravel", "PHP", "Filament", "Orchid", "REST API", "SOAP", "Redis", "JWT/OAuth2"],
    "Bancos de Dados": ["MySQL", "SQLite"],
    "SEO & Analytics": ["GA4", "Google Search Console", "Lighthouse", "Screaming Frog", "schema.org"],
    "DevOps & Testes": ["Docker", "GitHub Actions", "Jest/RTL", "PHPUnit/Pest", "Playwright"],
    "Ferramentas": ["Git", "GitHub", "npm", "Vercel", "Postman/Insomnia"],
  }

  const techIcons: Record<string, React.ReactNode> = {
    "Front-end": <Code2 className="w-6 h-6 text-purple-400 mr-2" />,
    "Back-end": <Server className="w-6 h-6 text-purple-400 mr-2" />,
    "Bancos de Dados": <Database className="w-6 h-6 text-purple-400 mr-2" />,
    "SEO & Analytics": <BarChart3 className="w-6 h-6 text-purple-400 mr-2" />,
    "DevOps & Testes": <Settings className="w-6 h-6 text-purple-400 mr-2" />,
    "Ferramentas": <Settings className="w-6 h-6 text-purple-400 mr-2" />,
  }

  const technicalProjects = [
    {
      title: "Migração Laravel 9 → 12 (Horsch)",
      description:
        "Migração completa do sistema Horsch de Laravel 9 para 12 na Tuxon Soluções Web. Refatoração de breaking changes em autenticação, Eloquent e middleware, atualização de dependências e resolução de incompatibilidades.",
      tech: ["Laravel", "PHP", "Docker", "MySQL"],
      link: "",
      image: "/images/horsch.png",
      partner: "Tuxon Soluções Web",
      role: "Migração e refatoração completa",
    },
    {
      title: "Módulo de Assentamentos — Sistema de Chamados",
      description:
        "Desenvolvimento completo do módulo de assentamentos do sistema de chamados interno da Tuxon. Modelagem de banco de dados, CRUD completo, vínculo com chamados, histórico de alterações e interface administrativa.",
      tech: ["Laravel", "Filament", "MySQL", "PHP"],
      link: "",
      image: "/images/chamados.png",
      partner: "Tuxon Soluções Web",
      role: "Desenvolvimento completo do módulo",
    },
    {
      title: "Painéis Administrativos (Filament & Orchid)",
      description:
        "Desenvolvimento de painéis administrativos na Tuxon para gestão de clientes, com fluxos CRUD customizados, relatórios internos e containerização dos ambientes com Docker.",
      tech: ["Laravel", "Filament", "Orchid", "Docker"],
      link: "",
      image: "/images/painel.png",
      partner: "Tuxon Soluções Web",
      role: "Desenvolvimento e manutenção",
    },
    {
      title: "AutoBusiness CMS",
      description:
        "Contribuições técnicas no CMS da Inffus, incluindo gerador de anúncios com IA (ChatGPT) e sistema de rastreamento de UTMs com validação automática — redução de marcações inválidas de 30% para menos de 2%.",
      tech: ["JavaScript", "Node.js", "OpenAI API", "NPM"],
      link: "https://app.autobusiness.com.br/",
      image: "/images/crm.png",
      partner: "Inffus",
      role: "Desenvolvimento de funcionalidades e pacote NPM",
    },
    {
      title: "Porto Camargo",
      description:
        "Integração da API do sistema imobiliário CVCRM ao site institucional da Porto Camargo, permitindo exibição dinâmica e automatizada de empreendimentos. Projeto realizado na Inffus.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      link: "https://portocamargo.com.br/",
      image: "/images/portocamargo.png",
      partner: "Inffus",
      role: "Integração da API do CVCRM",
    },
  ]

  const visualProjects = [
    {
      title: "BoraSelect",
      description:
        "Implementação das páginas internas com foco em performance e consistência visual. Projeto institucional desenvolvido pela Inffus.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://boraselect.com.br/",
      image: "/images/boraselect.png",
      partner: "Inffus",
      role: "Programação das páginas internas",
    },
    {
      title: "TQ Tec Treinamentos",
      description:
        "Site institucional moderno e responsivo, com foco em usabilidade, SEO e divulgação de cursos EAD e in-company. Programado na agência Sites10.",
      tech: ["PHP", "JavaScript", "HTML", "CSS"],
      link: "https://www.tqtectreinamentos.com.br/",
      image: "/images/tqtectreinamentos.png",
      partner: "Sites10",
      role: "Programação completa",
    },
    {
      title: "DEX Engenharia",
      description:
        "Site institucional voltado à engenharia industrial, com foco técnico, performance e clareza. Programado em parceria com a agência Sites10.",
      tech: ["PHP", "JavaScript", "HTML", "CSS"],
      link: "https://www.gdex.com.br/",
      image: "/images/dex.png",
      partner: "Sites10",
      role: "Programação completa",
    },
    {
      title: "Vestilo Uniformes",
      description:
        "Desenvolvimento das páginas internas do site da Vestilo com foco em responsividade, clareza de estrutura e padronização visual. Projeto da Inffus.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://site.vestilo.com.br/",
      image: "/images/vestilo.png",
      partner: "Inffus",
      role: "Programação das páginas internas",
    },
  ]

  const experiences = [
    {
      company: "Tuxon Soluções Web",
      role: "Desenvolvedor Web",
      period: "Setembro 2025 – Abril 2026",
      highlights: [
        "Conduziu migração do sistema Horsch de Laravel 9 para 12, resolvendo breaking changes em autenticação, Eloquent e middleware.",
        "Desenvolveu do zero o módulo de assentamentos do sistema de chamados interno — modelagem de banco, CRUD completo, vínculo com chamados, histórico de alterações e interface administrativa (Laravel/Filament).",
        "Construiu painéis administrativos com Filament e Orchid — gestão de clientes, fluxos CRUD customizados e relatórios internos.",
        "Padronizou ambientes de desenvolvimento e deploy com Docker.",
      ],
    },
    {
      company: "Inffus",
      role: "Desenvolvedor Web",
      period: "Dezembro 2024 – Agosto 2025",
      description: "10 sites institucionais — 80 mil visitas/mês",
      highlights: [
        "Criou gerenciador de UTMs com validação automática, derrubando marcações inválidas de 30% para menos de 2%.",
        "Migrou propriedades de marketing para Next.js (SSR/SSG) com otimização de imagens, reduzindo TTFB em 35% e INP para 180 ms.",
        "Evoluiu APIs internas (TypeScript/Laravel), melhorando consistência de contratos e reutilização entre projetos.",
      ],
    },
    {
      company: "Sites 10",
      role: "Desenvolvedor Web",
      period: "Março 2024 – Dezembro 2024",
      description: "25 sites institucionais — 150 mil visitas/mês",
      highlights: [
        "Entregou sites responsivos com SEO sólido (schema, sitemaps, Core Web Vitals), gerando +40% de tráfego orgânico.",
        "Reduziu tempo de carregamento em até 50% com lazy-loading, otimização de imagens/CDN e redução de payload.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-purple-400">Lucas</div>
            <div className="hidden md:flex space-x-8">
              {["sobre", "tecnologias", "projetos", "experiencia", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-purple-400 transition-colors capitalize"
                >
                  {{"sobre": "Sobre", "tecnologias": "Tecnologias", "projetos": "Projetos", "experiencia": "Experiência", "contato": "Contato"}[item]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou o <span className="text-purple-400">Lucas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">Desenvolvedor Web</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Interfaces performáticas, APIs robustas e SEO que gera resultado. Next.js, Laravel e TypeScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projetos")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-1000">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Sobre Mim</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Sou desenvolvedor web com 2 anos de experiência construindo aplicações com
                <span className="text-purple-400"> Next.js, React, TypeScript e Laravel</span>. Meu foco é
                entregar interfaces rápidas, APIs consistentes e fundações sólidas de SEO que geram resultado
                mensurável — como +40% de tráfego orgânico e redução de 50% no tempo de carregamento.
              </p>
              <p>
                Já trabalhei em três empresas, passando por dezenas de sites institucionais, migrações de sistemas
                legados (Laravel 9 → 12), painéis administrativos com
                <span className="text-purple-400"> Filament e Orchid</span>, módulos completos de sistemas internos,
                integrações de APIs externas e containerização com <span className="text-purple-400">Docker</span>.
                Transito confortavelmente entre front e back-end.
              </p>
              <p>
                Atualmente cursando Análise e Desenvolvimento de Sistemas na PUC Paraná, com formação técnica
                em Informática pelo IFPR. Sempre buscando desafios que me forcem a crescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="transition-all duration-1000">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Tecnologias</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(techStacks).map(([category, techs]) => (
                <Card
                  key={category}
                  className="bg-gray-800/50 border-gray-700 hover:border-purple-400 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {techIcons[category]}
                      <h3 className="text-xl font-semibold text-white">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="transition-all duration-1000">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Projetos</h2>
            <ProjectSection title="Funcionalidades Técnicas & Integrações" projects={technicalProjects} />
            <ProjectSection title="Sites Desenvolvidos" projects={visualProjects} />
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-1000">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Experiência</h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <Card key={exp.company} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h3 className="text-xl font-semibold text-white">
                            {exp.company}
                          </h3>
                          <span className="text-sm text-purple-400 font-medium">{exp.period}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                          {exp.role}
                          {exp.description && <span> • {exp.description}</span>}
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                              <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-1000">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Contato</h2>
            <div className="text-center w-full flex items-center flex-col">
              <p className="text-xl text-gray-300 mb-12">Vamos trabalhar juntos? Entre em contato comigo!</p>
              <div className="flex md:flex-row flex-col justify-center space-x-8 mb-12">
                <a
                  href="https://github.com/Kuligowskilucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-kuligowski-504017260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a
                  href="mailto:lucaskuligowski@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}