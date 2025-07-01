// components/ProjectCard.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
  partner?: string
  role?: string
}

export function ProjectCard({ title, description, tech, link, image, partner, role}: ProjectCardProps) {
  return (
    <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-400 transition-all duration-300 overflow-hidden">
      <div className="w-full h-[548px] bg-gray-700">
        <img src={image || "/placeholder.jpg"} alt={`Imagem do projeto ${title}`} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {partner && <p className="text-sm text-purple-400 italic mt-1">Parceria com {partner}</p>}
          {role && <p className="text-sm text-gray-400">Atuação: {role}</p>}
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="outline" className="border-purple-400 text-purple-300">
              {t}
            </Badge>
          ))}
        </div>
        <div>
          <Link href={link} target="_blank">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full mt-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Online
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
