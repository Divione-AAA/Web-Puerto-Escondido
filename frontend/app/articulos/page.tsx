import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { getArticulos } from "@/lib/api/strapi"
import Image from "next/image"

export default async function ArticulosPage() {
  const articulos = await getArticulos()

  const getPortadaUrl = (portada: any) => {
    if (portada?.data?.[0]?.attributes?.url) {
      const url = portada.data[0].attributes.url
      return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
    }
    return "/articulo.jpg"
  }

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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {articulos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articulos.map((articulo) => (
                <Card key={articulo.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={getPortadaUrl(articulo.Portada) || "/placeholder.svg"}
                        alt={articulo.Titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-accent transition-colors">
                        {articulo.Titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {articulo.Description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Sin artículos disponibles</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estamos trabajando en la publicación de nuestros artículos científicos sobre la flora, fauna y estado
                  de conservación de la Reserva Ecológica Canasí - Puerto Escondido.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}
