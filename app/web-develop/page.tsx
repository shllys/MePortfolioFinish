import Link from "next/link";
import Pcards from "./Components/Pcards";

export default function webDevelop() {
  const title = "Web Development";

  return (
    <main className="min-h-screen border-4 border-[#C8DDF550] text-white p-4 md:p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-2xs md:max-w-5xl w-full">
        <div className="relative rounded-2xl w-full bg-[url('/img/bg-coding.png')] bg-cover bg-center px-5">
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

        {/* <Pcards row="flex-row-reverse" /> */}

        <Pcards
          img1="forestHome (2).png"
          img2="forestPlant.png"
          img3="forestGallery (2).png"
          title1="Aplicación Web Educativa e Informativa de Botánica | React, TypeScript, Tailwind CSS, Supabase"
          desc1="- Gestión Interactiva de Cultivos: Desarrollé una plataforma web integral con catálogo dinámico por categorías, sistema de seguimiento de huerto personal, alertas de cuidado (riego/siembra) y guías detalladas de cultivo."
          desc2={`- Backend como Servicio (BaaS) e Interacción Social: Diseñé la arquitectura en Supabase para gestionar autenticación de usuarios, persistencia de datos (CRUD), moderación de comentarios y carga/asociación de imágenes a una galería colaborativa.
          - Tipado Estricto y Enrutamiento Seguro: Migré el proyecto a TypeScript para garantizar la escalabilidad y un código libre de errores en ejecución, integrando React Router para la protección de rutas privadas según la sesión del usuario.
          - Escritura y Mantenimiento Eficiente de Datos: Automaticé la inserción y actualización masiva de especificaciones técnicas mediante scripts SQL optimizados, mejorando el rendimiento de las consultas y la consistencia de la base de datos.`}
          link="https://github.com/shllys/ForestHome"
          desing="/ux-ui"
        />

        <div>
          <hr className="mt-10 " />
          <p className="text-3xl text-center py-5 font-smooch">
            Proyectos Colaborativos
          </p>
          <hr />
        </div>

        <Pcards
          row="flex-row-reverse"
          img1="Odoo1.png"
          img2="Odoo2.png"
          img3="Odoo3.png"
          title1="Desarrollo Web & Maquetación de Portal"
          desc1="- Centralización de Experiencia de Usuario (UX): Diseñé y desarrollé desde cero el portal web oficial e interactivo de la empresa, unificando múltiples servicios dispersos en una plataforma única y eficiente para el cliente."
          desc2={`- Diseño Responsivo y Trabajo Multidisciplinar: Colaboré estrechamente con el equipo de marketing para implementar la identidad visual (paleta de colores, recursos gráficos y logotipos), garantizando una maquetación web 100% responsiva y optimizada para dispositivos móviles.
          - Contenido Dinámico: Estructuré secciones informativas clave, incluyendo bloques de noticias, tarjetas de información (cards) y redirecciones optimizadas a recursos externos`}
          link="https://portal.esmtcx.com"
          desing="#"
        />
      </div>
    </main>
  );
}
