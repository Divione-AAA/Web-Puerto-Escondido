import Image from "next/image";

export default function HomePage() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Restauración del Ecosistema de Puerto Escondido
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        Un proyecto universitario dedicado a la conservación, restauración y estudio de la biodiversidad en la Reserva Ecológica Canasí - Puerto Escondido.
      </p>
      <div className="mt-8 flex justify-center">
        <Image
          src="/images/logo.svg"
          alt="Logo del Proyecto"
          width={128}
          height={128}
          priority
        />
      </div>
    </section>
  );
}
