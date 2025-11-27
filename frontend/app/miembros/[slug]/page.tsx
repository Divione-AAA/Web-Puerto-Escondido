"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getMiembroBySlug } from "@/lib/api/strapi"

export default async function MemberDetailPage({ params }: { params: { slug: string } }) {
  let member: any = null
  let error = false

  try {
    member = await getMiembroBySlug(params.slug)
  } catch (err) {
    console.error("Error fetching member:", err)
    error = true
  }

  const getFotoUrl = () => {
    if (member?.fotoURL?.data?.attributes?.url) {
      const url = member.fotoURL.data.attributes.url
      return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
    }
    return "/placeholder.svg"
  }

  if (error || !member) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold">Miembro no encontrado</h1>
              <Link href="/miembros">
                <Button>Volver al equipo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Back Button */}
      <div className="pt-24 pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link href="/miembros">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al equipo
            </Button>
          </Link>
        </div>
      </div>

      {/* Member Detail */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[300px,1fr] gap-12">
              {/* Left Column - Image */}
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border-4 border-border">
                  <Image src={getFotoUrl() || "/placeholder.svg"} alt={member.nombre} fill className="object-cover" />
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {member.viajes && member.viajes > 0 && (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{member.viajes}</div>
                        <div className="text-sm text-muted-foreground">
                          {member.viajes === 1 ? "Expedición" : "Expediciones"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{member.nombre}</h1>
                  <Badge variant="secondary" className="text-sm">
                    Miembro del equipo
                  </Badge>
                </div>

                {/* Description */}
                {member.description && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      Sobre mí
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                )}

                {/* Function */}
                {member.function && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Función en el proyecto</h2>
                    <div className="p-6 bg-card rounded-xl border border-border">
                      <p className="text-muted-foreground leading-relaxed">{member.function}</p>
                    </div>
                  </div>
                )}

                {/* Experience Highlights */}
                {member.viajes && member.viajes > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Experiencia de campo</h2>
                    <div className="grid gap-4">
                      <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Reserva Ecológica Canasí - Puerto Escondido</h3>
                            <p className="text-muted-foreground">
                              Ha participado en {member.viajes} {member.viajes === 1 ? "expedición" : "expediciones"} de
                              investigación y conservación en la reserva ecológica.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
