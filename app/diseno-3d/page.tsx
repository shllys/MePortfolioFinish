import Link from "next/link";
import Dcards from "./Dcards";

export default function diseno() {
  const title = "Diseño 3D";

  return (
    <main className="min-h-screen border-2 border-[#C8DDF550] text-white p-4 md:p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-2xs md:max-w-6xl w-full">
        {/* Banner de Encabezado */}
        <div className="relative rounded-2xl w-full bg-[url('/img/blender_bg.webp')] bg-cover bg-center px-5">
          <Link
            href="/"
            className="text-[#3A60A0] hover:text-[#122447] transition-colors my-5 inline-block font-semibold"
          >
            ← Back
          </Link>

          <header className="my-10 border-b border-white/20 pb-5">
            <h1 className="text-6xl font-smooch">{title}</h1>
          </header>
        </div>

        <div>
          <hr className="border-white/20" />
          <p className="text-3xl text-center py-5 font-smooch">
            Proyectos Personales
          </p>
          <hr className="border-white/20" />
        </div>

        {/* TARJETA EXISTENTE DE POKÉBALL */}
        <Dcards
          img1="Hongos.webp"
          img01="HongosM.webp"
          img2="Bruja.webp"
          img02="BrujaM.webp"
          img3="Burguers.webp"
          img03="BurguersM.webp"
          asset="Stylized Low-Poly"
          title1="Estudios de Renders Low-Poly: Asset Collection | Blender"
          desc1={`- Fundamentos de Geometría & Silueta: Modelado desde primitivas básicas con enfoque en optimización poligonal, extrusiones limpias y legibilidad de formas en props estilizados (Hamburguesa, Hongos Mágicos y Sombrero de Bruja). 
          
          - Teoría del Color & Shading Estilizado: Aplicación de paletas vibrantes con contrastes bien definidos y sombreados planos/suaves para lograr una estética fantástica, cozy e intuitiva.
          
          - Esquema de Iluminación & Composición: Configuración de estudios de luz neutros con sombreado suave (soft shadows) para resaltar los volúmenes, la tridimensionalidad y la jerarquía visual de cada elemento.`}
          desc2={`- Texto Alternativo Resumido
          "Colección de props estilizados creada en Blender para dominar las bases del modelado Low-Poly, el estudio de siluetas y la iluminación de estudio. Proyecto enfocado en la simplicidad poligonal y la aplicación de color para generar assets de videojuegos con fuerte identidad visual."
          
          Blender 3D • Low-Poly • Prop Design • Lighting Study • Asset Pack`}
          link="https://www.instagram.com/shellys.axel/"
          desing="#"
        />
      </div>
    </main>
  );
}
