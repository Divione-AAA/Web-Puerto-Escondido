import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Waves, Leaf, Trash2, Camera, BookOpen, Users } from "lucide-react"

export default function ActividadesPage() {
  const activities = [
    {
      icon: Leaf,
      title: "Monitoreo de Behaimia cubensis",
      description:
        "Seguimiento y registro de esta especie endémica amenazada, documentando su distribución y estado de conservación en la reserva.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Trash2,
      title: "Limpieza de playas y arrecifes",
      description:
        "Recogida, clasificación y conteo de basura marina para estudios sobre contaminación y su impacto en los ecosistemas costeros.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Waves,
      title: "Buceo y esnórquel",
      description:
        "Exploración submarina para el estudio de la biodiversidad marina, corales y especies acuáticas en su hábitat natural.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Camera,
      title: "Documentación fotográfica",
      description:
        "Registro visual de flora, fauna y funga del área para identificación, clasificación y divulgación científica.",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: BookOpen,
      title: "Investigación científica",
      description:
        "Estudios de microplásticos, análisis de biodiversidad y publicación de artículos sobre la conservación de ecosistemas costeros.",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      icon: Users,
      title: "Educación ambiental",
      description:
        "Formación de estudiantes universitarios y divulgación con comunidades locales sobre la importancia de la conservación marina.",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary/20 mb-4">
              <Waves className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Nuestras Actividades</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Trabajamos en múltiples frentes para proteger y estudiar los ecosistemas costeros de la Reserva Ecológica
              Canasí - Puerto Escondido
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${activity.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <activity.icon className={`h-7 w-7 ${activity.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Reserva Ecológica Canasí - Puerto Escondido</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Nuestro campo de trabajo es una reserva ecológica única que alberga especies endémicas amenazadas,
              ecosistemas costeros diversos y una rica biodiversidad marina. Cada expedición nos permite profundizar en
              el conocimiento de este valioso patrimonio natural y trabajar activamente en su conservación.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
