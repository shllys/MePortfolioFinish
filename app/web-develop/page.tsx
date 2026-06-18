import Link from "next/link";
import Pcards from "./Components/Pcards";

export default function webDevelop() {
  const title = "Web Development";

  return (
    <main className="min-h-screen border-2 border-[#C8DDF550] text-white p-4 md:p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-2xs md:max-w-4xl w-full">
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

        <Pcards
          img1="foresthome.png"
          img2="forestplanta.png"
          img3="forestgallery.png"
          title1="Aplicación Web Educativa e Informativa de Botánica | React, TypeScript, Tailwind CSS, Supabase"
          desc1="- Arquitectura de Datos y CRUD: Diseñé e integré una API personalizada utilizando Supabase como BaaS (Backend as a Service) para gestionar el almacenamiento y renderizado dinámico de categorías de plantas (medicinales, huerto, ambientales)."
          desc2={`- Seguridad y Autenticación: Implementé un sistema de autenticación de usuarios (registro e inicio de sesión) para proteger rutas y permitir la creación y personalización de listas mediante formularios dinámicos.
          - Enrutamiento y Robustez: Estructuré la navegación interna de la aplicación utilizando React Router y asumí el reto de migrar el entorno a TypeScript para asegurar un tipado estático estricto, reduciendo errores en tiempo de ejecución y optimizando la escalabilidad del código.`}
          link="#"
        />
        {/* <Pcards row="flex-row-reverse" /> */}

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
        />
      </div>
    </main>
  );
}
