import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Waves, Leaf, Fish, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background mt-16">
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Logo/Badge */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/20 mb-4">
              <Waves className="h-12 w-12 text-primary" />
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-balance leading-tight">
              Intervención ambiental comunitaria para conservar la biodiversidad en{" "}
              <span className="text-primary">ecosistemas costeros</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proyecto universitario dedicado a la protección y restauración de nuestros ecosistemas marinos y costeros
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/miembros">
                <Button size="lg" className="gap-2 text-lg px-8">
                  Conoce al equipo
                  <Users className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/actividades">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-transparent">
                  Nuestras actividades
                  <Waves className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Nuestra Misión</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Trabajamos en la Reserva Ecológica Canasí - Puerto Escondido, realizando investigación científica,
              monitoreo de especies endémicas, limpieza de playas y educación ambiental. Nuestro objetivo es preservar
              la biodiversidad marina y costera para las futuras generaciones.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="bg-background rounded-xl p-8 space-y-4 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Fish className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Conservación Marina</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitoreo de especies endémicas, estudios de biodiversidad y protección de hábitats costeros
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 space-y-4 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Investigación Científica</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estudios de flora y fauna, análisis de microplásticos y publicaciones científicas
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 space-y-4 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Educación Ambiental</h3>
              <p className="text-muted-foreground leading-relaxed">
                Formación de estudiantes universitarios y divulgación con comunidades locales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Únete a nuestra causa</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Cada acción cuenta en la protección de nuestros océanos y costas
            </p>
            <Link href="/miembros">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 mt-4">
                Conoce más sobre nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
