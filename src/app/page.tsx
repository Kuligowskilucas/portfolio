"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Settings, ChevronDown } from "lucide-react"
import Link from "next/link"
import { ProjectSection } from "@/components/ui/ProjectSection"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({})

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
    "Front-end": ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    "Back-end": ["PHP", "Laravel"],
    Ferramentas: ["Git", "GitHub", "CMS", "SaaS"],
  }

  const visualProjects = [
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
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://site.vestilo.com.br/",
    image: "/images/vestilo.png",
    partner: "Inffus",
    role: "Programação das páginas internas",
  },
  {
    title: "BoraSelect",
    description:
      "Implementação das páginas internas com foco em performance e consistência visual. Projeto institucional desenvolvido pela Inffus.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://boraselect.com.br/",
    image: "/images/boraselect.png",
    partner: "Inffus",
    role: "Programação das páginas internas",
  },
]

const technicalProjects = [
  {
    title: "Porto Camargo",
    description:
      "Integração da API do sistema imobiliário CVCRM ao site institucional da Porto Camargo, permitindo exibição dinâmica e automatizada de empreendimentos. Projeto realizado na Inffus.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    link: "https://portocamargo.com.br/",
    image: "/images/portocamargo.jpg",
    partner: "Inffus",
    role: "Integração da API do CVCRM",
  },
  {
    title: "AutoBusiness CMS",
    description:
      "Contribuições técnicas no CMS da Inffus, incluindo gerador de anúncios com IA (ChatGPT) e sistema de rastreamento de UTMs, agora evoluído para um pacote NPM reutilizável.",
    tech: ["JavaScript", "Node.js", "OpenAI API", "NPM"],
    link: "https://app.autobusiness.com.br/",
    image: "/images/autobusiness.jpg",
    partner: "Inffus",
    role: "Desenvolvimento de funcionalidades e pacote NPM",
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
                  {item === "experiencia" ? "Experiência" : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou o <span className="text-purple-400">Lucas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">Desenvolvedor Front-End</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Crio interfaces modernas com foco em performance e experiência.
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
          <div className={`transition-all duration-1000`}>
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Sobre Mim</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Sou um desenvolvedor front-end em formação, com experiência prática utilizando
                <span className="text-purple-400"> Next.js, TypeScript, PHP e Laravel</span>. Minha paixão está em criar
                interfaces que não apenas impressionam visualmente, mas também oferecem uma experiência excepcional ao
                usuário.
              </p>
              <p>
                Durante minha jornada, tive a oportunidade de trabalhar como estagiário em duas empresas, onde pude
                aplicar meus conhecimentos na criação e manutenção de sites reais, desenvolvimento de APIs, sistemas
                CMS, plataformas SaaS e suporte ao cliente.
              </p>
              <p>
                Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor, mantendo-me
                atualizado com as mais recentes tecnologias e melhores práticas do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000`}>
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Tecnologias</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(techStacks).map(([category, techs], index) => (
                <Card
                  key={category}
                  className="bg-gray-800/50 border-gray-700 hover:border-purple-400 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {category === "Front-end" && <Code2 className="w-6 h-6 text-purple-400 mr-2" />}
                      {category === "Back-end" && <Database className="w-6 h-6 text-purple-400 mr-2" />}
                      {category === "Ferramentas" && <Settings className="w-6 h-6 text-purple-400 mr-2" />}
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

            <ProjectSection title="Sites Desenvolvidos" projects={visualProjects} />
            <ProjectSection title="Funcionalidades Técnicas & Integrações" projects={technicalProjects} />
          </div>
        </div>
      </section>
         

      <section id="experiencia" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000`}>
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Experiência</h2>
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Estágio 1, empresa Sites10 (Março - Dezembro de 2024)</h3>
                      <p className="text-gray-300 leading-relaxed white-space-pre">
                        Atuei no desenvolvimento de páginas web responsivas e otimizadas para SEO, utilizando HTML, CSS e JavaScript no front-end e PHP no back-end. Minhas principais contribuições incluíram:<br/>

                        Integração de APIs externas, como a API de avaliações do Google, para agregar valor às aplicações e aprimorar a experiência do usuário.

                        Desenvolvimento de APIs internas eficientes, com foco em performance e consultas otimizadas ao banco de dados.

                        Aplicação de boas práticas de usabilidade, acessibilidade e design responsivo, garantindo uma navegação fluida em diferentes dispositivos.

                        Priorização da performance e escalabilidade, entregando soluções que atendem às necessidades técnicas e comerciais dos projetos.


                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Estágio 2, empresa Inffus (Dezembro de 2024 - atual)</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Criação de páginas internas, manutenção de APIs, suporte ao cliente e melhorias técnicas.
                        Expandindo conhecimentos em desenvolvimento full-stack e aprimorando habilidades de comunicação
                        com clientes e resolução de problemas complexos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Contato</h2>
            <div className="text-center">
              <p className="text-xl text-gray-300 mb-12">Vamos trabalhar juntos? Entre em contato comigo!</p>
              <div className="flex justify-center space-x-8 mb-12">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a
                  href="mailto:lucas@email.com"
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

      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Lucas. Desenvolvido com Next.js e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
