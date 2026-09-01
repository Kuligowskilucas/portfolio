// components/ProjectCard.tsx
import Image from "next/image"
import type { Project } from "@/data/portfolio"

const linkClass =
  "text-prussian underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-prussian"

export function ProjectCard({ title, context, description, tech, image, links, restrictedLabel }: Project) {
  return (
    <article className="border-t border-rule py-10 first:border-t-0 first:pt-0">
      <h4 className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-snug tracking-[-0.015em] text-ink">
        {title}
      </h4>
      <p className="mt-2 text-[0.8125rem] font-medium text-graphite">{context}</p>

      <p className="mt-5 max-w-[68ch] text-[1.0625rem] leading-[1.65] text-graphite">{description}</p>

      {image && (
        <div className="relative mt-7 aspect-[16/10] w-full max-w-[700px] overflow-hidden rounded-[2px] bg-shelf">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover object-top"
          />
        </div>
      )}

      <p className="mt-6 max-w-[68ch] text-[0.8125rem] leading-relaxed text-graphite">{tech.join(" · ")}</p>

      {links && links.length > 0 ? (
        <p className="mt-4 text-[0.8125rem] font-medium">
          {links.map((link, index) => (
            <span key={link.href}>
              {index > 0 && (
                <span aria-hidden="true" className="px-2 text-rule">
                  ·
                </span>
              )}
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
              </a>
            </span>
          ))}
        </p>
      ) : (
        restrictedLabel && <p className="mt-4 text-[0.8125rem] italic text-graphite">{restrictedLabel}</p>
      )}
    </article>
  )
}
