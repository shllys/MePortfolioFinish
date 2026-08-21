import Image from "next/image";

interface PcardsProps {
  row?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  title1?: string;
  link?: string;
  design?: string;
}

function Pcards(props: PcardsProps) {
  const rowClass =
    props.row === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <>
      <div>
        <section
          className={`lg:mt-10 w-full flex flex-col ${rowClass} items-center gap-8`}
        >
          {/* Contenedor del carrusel con fade automático */}
          <div className="relative w-full max-w-xl aspect-video rounded-2xl border-4 border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm flex-shrink-0 border-l-10 border-t-10 w-120 h-70">
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
        </section>

        {/* Texto descriptivo */}
        <div className="w-full lg:w-auto lg:flex lg:flex-col justify-center">
          <h2 className="text-2xl font-bold mt-6">{props.title1}</h2>
        </div>

        <div className="flex justify-start lg:justify-between w-full">
          <a
            href={props.link}
            rel="noopener noreferrer"
            className="mt-6 text-[#C8DDF5] hover:text-[#ffffff] transition-colors drop-shadow-lg drop-shadow-cyan-300 px-4 py-1 font-bold border rounded-2xl bg-blue-400/20"
          >
            Ver Desarrollo
          </a>

          <a
            href={props.design}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-[#C8DDF5] hover:text-[#ffffff] transition-colors drop-shadow-lg drop-shadow-fuchsia-200 px-4 py-1 font-bold border rounded-2xl bg-fuchsia-400/20"
          >
            + Diseños
          </a>
        </div>
      </div>
    </>
  );
}

export default Pcards;
