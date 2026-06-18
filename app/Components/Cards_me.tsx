"use client";
import { useState, useEffect } from "react";

// Definimos la estructura de los datos para la navegación interna
interface InfoPage {
  title: string;
  name: string;
  fecha: string;
  textone: string;
  texttwo?: string;
}

function Cards_me(props: { pages: InfoPage[] }) {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false); // Estado para la animación
  const [currentPage, setCurrentPage] = useState(0);

  // Manejador para abrir el modal con animación
  const openModal = () => {
    setCurrentPage(0);
    setShowModal(true);
  };

  // Efecto para disparar la animación de escala al abrir
  useEffect(() => {
    if (showModal) {
      // Un pequeño timeout para asegurar que el navegador registre el cambio de estado
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [showModal]);

  // Manejador para cerrar con animación de salida
  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setShowModal(false), 300); // Tiempo igual a la duración de la transición
  };

  const nextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPage((prev) => (prev + 1) % props.pages.length);
  };

  const prevPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPage(
      (prev) => (prev - 1 + props.pages.length) % props.pages.length,
    );
  };

  const currentData = props.pages[currentPage];

  return (
    <>
      {/* TARJETA QUE GIRA */}
      <div
        className="group w-full h-30 md:h-full perspective-[1000px] cursor-pointer"
        onClick={openModal}
      >
        <div className="relative w-full h-full transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
          {/* LADO FRONTAL */}
          <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-lg font-smooch">
              {props.pages[0].title}
            </h2>
            <div className=" bg-[#0B183880] p-2 rounded-xl border border-[#C8DDF560] w-full text-center">
              {/* <p className="text-[10px] font-itim italic">{props.pages[0].fecha}</p> */}
              <h1 className="animate-pulse text-sm font-bold font-itim">
                {props.pages[0].name}
              </h1>
            </div>
          </div>
          {/* LADO TRASERO */}
          <div className="absolute top-13 left-23 inset-0 w-30 h-10 backface-hidden transform-[rotateY(180deg)] rounded-2xl flex items-center justify-center p-2 border border-[#C8DDF540]">
            <p className="text-white font-smo text-sm text-center">
              + Ver detalles +
            </p>
          </div>
        </div>
      </div>

      {/* MODAL CON ANIMACIÓN DESDE EL MEDIO */}
      {showModal && (
        <div
          className={`inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ease-in-out absolute bottom-30
            ${animate ? "bg-black/60 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"}`}
          onClick={closeModal}
        >
          <div
            className={`relative flex items-center max-w-md w-full transition-all duration-300 ease-out transform
              ${animate ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Flecha Izquierda */}
            {props.pages.length > 1 && (
              <button
                onClick={prevPage}
                className="absolute -left-5 z-10 bg-[#C8DDF5] text-[#0B1838] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl font-bold"
              >
                {"<"}
              </button>
            )}

            {/* Contenedor del Contenido */}
            <div className="bg-gradient-to-br from-[#0B1838] to-[#3A60A0] border-2 border-[#C8DDF580] p-4 rounded-3xl w-full text-center shadow-2xl min-h-20 flex flex-col justify-center relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#C8DDF580] hover:text-white text-2xl"
              >
                ✕
              </button>

              <h2 className="text-4xl font-smooch text-amber-50 underline mb-2">
                {currentData.title}
              </h2>
              <h3 className="text-xl font-itim text-[#C8DDF5] mb-3">
                °{currentData.name}°
              </h3>

              <div className="text-[13.5px] font-itim text-white space-y-2 text-center overflow-y-auto max-h-[200px] pr-3 ">
                <p className="leading-relaxed">{currentData.textone}</p>
                {currentData.texttwo && (
                  <div className="border-t border-[#C8DDF520] pt-4">
                    <p className="leading-relaxed">{currentData.texttwo}</p>
                  </div>
                )}
              </div>

              {/* Indicador de páginas */}
              <div className="mt-6 flex justify-center gap-2">
                {props.pages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentPage ? "bg-white w-4" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <p className="mt-5 text-[10px] font-itim italic text-[#C8DDF580]">
                {currentData.fecha}
              </p>
            </div>

            {/* Flecha Derecha */}
            {props.pages.length > 1 && (
              <button
                onClick={nextPage}
                className="absolute -right-5 z-10 bg-[#C8DDF5] text-[#0B1838] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl font-bold"
              >
                {">"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cards_me;
