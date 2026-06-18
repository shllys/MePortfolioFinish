import Image from "next/image";

interface DcardsProps {
  row?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  title1?: string;
  desc1?: string;
  desc2?: string;
  link?: string;
}

function Dcards(props: DcardsProps) {
  const rowClass =
    props.row === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <>
      <section
        className={`lg:mt-10 w-full flex flex-col ${rowClass} items-center gap-8`}
      >
        {/* Contenedor del carrusel con fade automático */}
        <div className="relative w-full max-w-xl aspect-video rounded-2xl border-2 border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm flex-shrink-0 border-l-10 border-t-10 ">
          <div className="absolute inset-0 fade-carousel rounded-2xl">
            <div className="slide">
              <Image
                src={`/img/${props.img1}`}
                alt=""
                fill
                className="object-cover rounded-lg border border-white/20"
                priority
              />
            </div>

            <div className="slide">
              <Image
                src={`/img/${props.img2}`}
                alt=""
                fill
                className="object-cover rounded-lg border border-white/20"
              />
            </div>

            <div className="slide">
              <Image
                src={`/img/${props.img3}`}
                alt="Otra vista del proyecto"
                fill
                className="object-cover rounded-lg border border-white/20"
              />
            </div>

            {/* Duplicamos la primera para que el loop sea más suave */}
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full lg:w-auto lg:flex lg:flex-col justify-center">
          <h2 className="text-md lg:text-xl font-bold mb-4 text-black bg-[#C8DDF5]/50 backdrop-blur-sm p-4 rounded-lg font-itim text-shadow-lg">
            {props.title1}
          </h2>
          <p className="text-sm lg:text-lg backdrop-blur-sm font-smooch font-semibold text-black leading-relaxed max-w-full p-4 rounded-lg text-shadow-lg bg-[#C8DDF5]/50">
            {props.desc1}
          </p>
        </div>
      </section>
      <div className="mx-0 lg:mx-auto mt-5 lg:mt-6 w-full max-w-4xl">
        <p className="text-sm lg:text-lg backdrop-blur-sm font-smooch font-semibold text-black leading-relaxed p-4 rounded-lg text-shadow-lg whitespace-pre-line bg-[#C8DDF5]/50">
          {props.desc2}
        </p>
      </div>

      <div className="flex justify-start lg:justify-end">
        {props.link === "#" ? (
          <span className="mt-6 text-esmerald-400 drop-shadow-lg drop-shadow-emerald-200 px-4 py-1 font-bold border rounded-2xl bg-emerald-500/30 text-lg">
            En desarrollo
          </span>
        ) : (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-[#C8DDF5] hover:text-[#ffffff] transition-colors drop-shadow-lg drop-shadow-cyan-300 px-4 py-1 font-bold border rounded-2xl bg-blue-400/20"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </>
  );
}

export default Dcards;
