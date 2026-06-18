import Link from "next/link";

export default function ConceptArt() {
  const title = "Concept Art";

  return (
    <main className="min-h-screen border-2 border-[#C8DDF550] text-white p-8 flex flex-col items-center rounded-2xl">
      <div className="max-w-4xl w-full">
        <div className="relative rounded-2xl w-full bg-[url('/img/blender_bg.png')] bg-cover bg-center px-5">
          <Link
            href="/"
            className="text-[#3A60A0] hover:text-[#0A1633] transition-colors my-5 inline-block"
          >
            ← Volver al Portafolio
          </Link>

          <header className="mt-10 border-b border-white/20 pb-5">
            <h1 className="text-6xl font-smooch">{title}</h1>
          </header>
        </div>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 aspect-video rounded-2xl border border-white/10 flex items-center justify-center">
            <p className="text-white/40 italic">
              Aquí va tu modelo 3D, video o galería
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Descripción del Proyecto
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Proyecto enfocado en modelado y renderizado 3D con Blender / ...
            </p>
            {/* Agrega aquí todo lo único de este proyecto */}
          </div>
        </section>
      </div>
    </main>
  );
}
