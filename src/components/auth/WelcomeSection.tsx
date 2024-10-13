import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-color1">
        Bienvenido a BaratoBarato
      </h2>
      <Image
        src="/assets/Inventarios.png" // Ajusta la ruta de la imagen si es necesario
        alt="Bienvenido"
        width={400}
        height={400}
        className="mx-auto"
      />
    </div>
  );
}
