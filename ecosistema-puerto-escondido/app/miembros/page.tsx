import miembros from "@/data/miembros.json";
import CardMiembro from "@/components/CardMiembro";

export default function MiembrosPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Miembros del Proyecto</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {miembros.map((m) => (
          <CardMiembro key={m.id} miembro={m} />
        ))}
      </div>
    </section>
  );
}
