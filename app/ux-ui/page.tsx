import Link from "next/link";
import UIcards from "./Components/UIcards";

export default function UXUIDesign() {
  const title = "UX-UI Design";

  return (
    <main className="min-h-screen border-4 border-[#C8DDF550] text-white p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-5xl w-full">
        <div className="relative rounded-2xl w-full bg-[url('/img/bg-uxui.png')] bg-cover bg-center px-5">
          <Link
            href="/"
            className="text-[#3A60A0] hover:text-[#96a0b8] transition-colors my-5 inline-block"
          >
            ← Volver al Portafolio
          </Link>

          <header className="mt-10 border-b border-white/20 pb-5">
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

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <UIcards
            img1="dsh.png"
            img2="dsp.png"
            img3="dsg.png"
            title1="Aplicación Web Educativa e Informativa de Botánica | React, TypeScript, Tailwind CSS, Supabase"
            link="/web-develop"
            design="https://www.instagram.com/shellys.axel/"
          />
        </section>

        {/* <div>
          <hr className="mt-10 " />
          <p className="text-3xl text-center py-5 font-smooch">
            Proyectos Colaborativos
          </p>
          <hr />
        </div> */}
      </div>
    </main>
  );
}
