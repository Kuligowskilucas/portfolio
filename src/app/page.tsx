import type React from "react"
import { ProjectSection } from "@/components/ui/ProjectSection"
import { portfolio } from "@/data/portfolio"

/** Link em azul-petróleo, sublinhado discreto que firma no hover e no foco. */
const linkClass =
  "text-prussian underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-prussian"

const buttonClass =
  "inline-block rounded-[2px] bg-prussian px-6 py-3 text-[0.9375rem] font-medium text-paper transition-colors duration-150 hover:bg-ink"

/**
 * Categoria que o CONTEUDO-PORTFOLIO.md manda não ter o mesmo peso visual
 * que Back-end. Aqui isso vira estrutura, não opinião: ela sai do corpo da
 * lista e entra num bloco menor no fim.
 */
const SECONDARY_TECH_CATEGORY = "seo-ferramentas"

/** Bloco padrão da página: nome da seção na margem, conteúdo à direita. */
function Section({
  id,
  heading,
  children,
}: {
  id: string
  heading: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-32 md:scroll-mt-24">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="border-t border-rule py-16 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-12 md:py-24">
          <h2 className="text-[0.8125rem] font-medium tracking-[0.02em] text-graphite md:sticky md:top-24 md:self-start">
            {heading}
          </h2>
          <div className="mt-8 md:mt-0">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  const { brand, nav, hero, about, tech, projects, experience, contact } = portfolio

  const ledger = projects.groups.find((group) => group.id === "sistemas-em-producao")
  const techPrimary = tech.categories.filter((category) => category.id !== SECONDARY_TECH_CATEGORY)
  const techSecondary = tech.categories.filter((category) => category.id === SECONDARY_TECH_CATEGORY)

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-rule bg-paper">
        <div className="mx-auto w-full max-w-[1080px] md:flex md:items-baseline md:justify-between md:gap-8 md:px-6">
          <div className="px-6 pt-4 pb-3 md:px-0 md:py-4">
            <a href="#hero" className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
              {brand}
            </a>
          </div>
          <nav className="no-scrollbar overflow-x-auto border-t border-rule md:border-t-0">
            <ul className="flex w-max gap-6 px-6 py-3 text-[0.8125rem] font-medium tracking-[0.02em] md:w-auto md:px-0 md:py-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="whitespace-nowrap text-graphite transition-colors duration-150 hover:text-prussian"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="scroll-mt-32 md:scroll-mt-24">
        <div className="mx-auto w-full max-w-[1080px] px-6 pt-16 pb-20 md:pt-28 md:pb-28">
          <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.25rem] leading-[1.5] text-graphite">{hero.subtitle}</p>

          {ledger && (
            <section aria-labelledby="ledger-heading" className="mt-14">
              <h2 id="ledger-heading" className="sr-only">
                {ledger.title}
              </h2>
              <ul className="border-b border-rule">
                {ledger.projects.map((project, index) => {
                  const [name, descriptor] = project.title.split(" — ")
                  return (
                    <li
                      key={project.title}
                      className="ledger-row grid gap-x-8 gap-y-2 border-t border-rule py-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.4fr)] md:items-baseline"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <div>
                        <span className="font-display text-[1.125rem] font-semibold leading-snug text-ink">
                          {name}
                        </span>
                        {descriptor && (
                          <span className="mt-1 block text-[0.9375rem] leading-snug text-graphite">{descriptor}</span>
                        )}
                      </div>
                      <span className="text-[0.8125rem] font-medium leading-snug text-graphite">{project.context}</span>
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[0.8125rem] font-medium">
                        {project.links?.map((link, linkIndex) => (
                          <span key={link.href} className="inline-flex items-baseline gap-x-2">
                            {linkIndex > 0 && (
                              <span aria-hidden="true" className="text-rule">
                                ·
                              </span>
                            )}
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                              {link.label}
                            </a>
                          </span>
                        ))}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.9375rem] font-medium">
            <a href={`#${hero.primaryCta.targetId}`} className={buttonClass}>
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} download className={linkClass}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      <Section id="sobre" heading={about.heading}>
        <div className="max-w-[68ch]">
          {about.paragraphs.map((paragraph, index) =>
            index === 0 ? (
              <p key={paragraph} className="text-[1.1875rem] leading-[1.6] text-ink">
                {paragraph}
              </p>
            ) : (
              <p key={paragraph} className="mt-6 text-[1.0625rem] leading-[1.65] text-graphite">
                {paragraph}
              </p>
            ),
          )}
        </div>
      </Section>

      <Section id="tecnologias" heading={tech.heading}>
        <dl className="max-w-[68ch] border-t border-rule">
          {techPrimary.map((category) => (
            <div
              key={category.id}
              className="grid gap-x-8 gap-y-1 border-b border-rule py-5 md:grid-cols-[170px_minmax(0,1fr)]"
            >
              <dt className="text-[0.9375rem] font-medium text-ink">{category.title}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-graphite">{category.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>

        {techSecondary.map((category) => (
          <div key={category.id} className="mt-8 max-w-[68ch]">
            <h3 className="text-[0.8125rem] font-medium text-graphite">{category.title}</h3>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-graphite">{category.items.join(" · ")}</p>
          </div>
        ))}
      </Section>

      <Section id="projetos" heading={projects.heading}>
        {projects.groups.map((group) => (
          <ProjectSection key={group.id} title={group.title} projects={group.projects} />
        ))}
      </Section>

      <Section id="experiencia" heading={experience.heading}>
        <div className="border-t border-rule">
          {experience.items.map((exp) => (
            <article
              key={exp.company}
              className="border-b border-rule py-8 md:grid md:grid-cols-[150px_minmax(0,1fr)] md:gap-x-8"
            >
              <p className="text-[0.8125rem] font-medium tabular-nums text-graphite">{exp.period}</p>
              <div className="mt-3 md:mt-0">
                <h3 className="font-display text-[1.25rem] font-semibold leading-snug text-ink">{exp.company}</h3>
                <p className="mt-1 text-[0.8125rem] font-medium text-graphite">{exp.role}</p>
                <ul className="mt-4 max-w-[68ch] space-y-2.5">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="relative pl-5 text-[1rem] leading-[1.6] text-graphite">
                      <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-rule" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contato" heading={contact.heading}>
        <div className="max-w-[68ch]">
          {contact.lines.map((line, index) => (
            <p key={line} className={`text-[1.1875rem] leading-[1.6] text-ink ${index > 0 ? "mt-1" : ""}`}>
              {line}
            </p>
          ))}

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium">
            {contact.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...(link.id === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10">
            <a href={contact.resume.href} download className={buttonClass}>
              {contact.resume.label}
            </a>
          </p>
        </div>
      </Section>
    </div>
  )
}
