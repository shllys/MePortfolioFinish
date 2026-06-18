import Link from "next/link";
import Dcards from "./Dcards";

export default function webDevelop() {
  const title = "Diseño 3D";

  return (
    <main className="min-h-screen border-2 border-[#C8DDF550] text-white p-4 md:p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-2xs md:max-w-4xl w-full">
        <div className="relative rounded-2xl w-full bg-[url('/img/blender_bg.png')] bg-cover bg-center px-5">
          <Link
            href="/"
            className="text-[#3A60A0] hover:text-[#88A5E0] transition-colors my-5 inline-block"
          >
            ← Back
          </Link>

          <header className="my-10 border-b border-white/20 pb-5">
            <h1 className="text-6xl font-smooch">{title}</h1>
          </header>
        </div>

        <div>
          <hr />
          <p className="text-3xl text-center py-5 font-smooch">
            Proyectos Personales
          </p>
          <hr />
        </div>

        <Dcards
          img1="ball3d1.png"
          img2="ball3d2.png"
          img3="ball3d3.png"
          title1="Modelado y Composición 3D: Pokéball Concept | Blender"
          desc1="- Exploración de Texturas y Materiales: Desarrollé un modelo tridimensional de una Pokéball utilizando Blender, explorando de forma autodidacta el motor de sombreadores de la herramienta para aplicar texturas, acabados superficiales y mapas de relieve."
          desc2={`- Estudio de Iluminación y Renderizado: Configuré una escena con iluminación controlada para estudiar el comportamiento de las sombras y la proyección de reflejos realistas sobre superficies curvas, utilizando un flujo de trabajo optimizado para renderizado rápido.
          - Curva de Aprendizaje Activa: Superé el reto de dominar la interfaz técnica y el flujo de atajos de teclado (shortcuts) de Blender, fortaleciendo mis habilidades de diseño espacial y volumétrico para la futura creación de recursos gráficos interactivos en la web.`}
          link="#"
        />
        {/* <Pcards row="flex-row-reverse" /> */}

        {/* <div>
          <hr className="mt-10 " />
          <p className="text-3xl text-center py-5 font-smooch">
            Proyectos Colaborativos
          </p>
          <hr />
        </div>

        <Dcards
          row="flex-row-reverse"
          img1="Odoo1.png"
          img2="Odoo2.png"
          img3="Odoo3.png"
          title1="Desarrollo Web & Maquetación de Portal"
          desc1="- Centralización de Experiencia de Usuario (UX): Diseñé y desarrollé desde cero el portal web oficial e interactivo de la empresa, unificando múltiples servicios dispersos en una plataforma única y eficiente para el cliente."
          desc2={`- Diseño Responsivo y Trabajo Multidisciplinar: Colaboré estrechamente con el equipo de marketing para implementar la identidad visual (paleta de colores, recursos gráficos y logotipos), garantizando una maquetación web 100% responsiva y optimizada para dispositivos móviles.
          - Contenido Dinámico: Estructuré secciones informativas clave, incluyendo bloques de noticias, tarjetas de información (cards) y redirecciones optimizadas a recursos externos`}
          link="https://portal.esmtcx.com"
        /> */}
      </div>
    </main>
  );
}
