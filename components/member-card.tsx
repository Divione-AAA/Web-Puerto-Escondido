import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

interface MemberCardProps {
  member: {
    id: string
    nombre: string
    fotoUrl: string
    descripcion: string
    viajes: number
  }
}

export function MemberCard({ member }: MemberCardProps) {
  // Create URL-friendly slug from name
  const slug = member.nombre
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")

  return (
    <Link href={`/miembros/${slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={member.fotoUrl || "/placeholder.svg"}
              alt={member.nombre}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Viajes Badge */}
            {member.viajes > 0 && (
              <Badge className="absolute top-3 right-3 gap-1 bg-primary/90 backdrop-blur-sm">
                <MapPin className="h-3 w-3" />
                {member.viajes} {member.viajes === 1 ? "viaje" : "viajes"}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {member.nombre}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{member.descripcion}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
