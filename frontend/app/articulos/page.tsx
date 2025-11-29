import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArticulosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20 mb-4">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Publicaciones Científicas</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Investigaciones y estudios sobre la conservación de ecosistemas costeros y biodiversidad marina
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                <FileText className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Próximamente</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estamos trabajando en la publicación de nuestros artículos científicos sobre la flora, fauna y estado de
                conservación de la Reserva Ecológica Canasí - Puerto Escondido.
              </p>
              <Button variant="outline" className="gap-2 bg-transparent">
                Contactar para más información
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
