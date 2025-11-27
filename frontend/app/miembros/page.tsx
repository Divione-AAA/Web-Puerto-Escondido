import { Navigation } from "@/components/navigation"
import { MemberCard } from "@/components/member-card"
import { Waves } from "lucide-react"
import { getMiembros } from "@/lib/api/strapi"

export default async function MiembrosPage() {
  let miembros: any[] = []
  let error = false

  try {
    miembros = await getMiembros()
  } catch (err) {
    console.error("Error fetching miembros:", err)
    error = true
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
              <Waves className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Nuestro Equipo</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Conoce a los investigadores, estudiantes y profesionales dedicados a la conservación de nuestros
              ecosistemas costeros
            </p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error ? (
            <div className="flex items-center justify-center py-24">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">Error al cargar los miembros. Por favor, intenta más tarde.</p>
              </div>
            </div>
          ) : miembros.length === 0 ? (
            <div className="flex items-center justify-center py-24">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">No hay miembros disponibles</p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {miembros.map((miembro) => (
                <MemberCard key={miembro.id} member={miembro} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
