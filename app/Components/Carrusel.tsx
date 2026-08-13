"use client";
import { useRef, useEffect } from "react";
import Cards from "./Cards";
import { cardsData, type ProjectCard } from "../data/cardsData";

function Carrusel({ click }: { click: (p: ProjectCard) => void }) {
  // Triplicamos la lista para permitir un bucle continuo en ambos sentidos
  const marqueeCards = [...cardsData, ...cardsData, ...cardsData];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Ancho de una sola lista original
    const singleWidth = el.scrollWidth / 3;

    // Posicionamos el scroll en el bloque central al cargar
    el.scrollLeft = singleWidth;

    let rafId = 0;
    let last = performance.now();
    const speed = 0.04; // Velocidad del auto-scroll (px/ms)

    const step = (now: number) => {
      const dt = now - last;
      last = now;

      if (!isPaused.current && el) {
        el.scrollLeft += speed * dt;

        // Reset infinito al avanzar (Derecha)
        if (el.scrollLeft >= singleWidth * 2) {
          el.scrollLeft -= singleWidth;
        }

        // Reset infinito al retroceder (Izquierda)
        if (el.scrollLeft <= 0) {
          el.scrollLeft += singleWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scroll = (dir: "left" | "right") => {
    console.debug("Carrusel.scroll() ->", dir, "ref:", carouselRef.current);
    if (!carouselRef.current) return;
    const amount = dir === "left" ? -350 : 350;

    try {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    } catch (e) {
      // Fallback si scrollBy falla
      carouselRef.current.scrollLeft += amount;
    }
  };

  return (
    <div className="h-60 md:h-full w-full flex flex-col justify-center items-center py-1.5">
      <h2 className="text-center mt-5 md:-mb-5 text-amber-50 text-[30px] font-smooch">
        PORTFOLIO
      </h2>

      <div className="relative flex items-center w-full max-w-5xl overflow-hidden h-80 group py-4">
        {/* Botón Izquierdo */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          onPointerDown={() => scroll("left")}
          style={{ pointerEvents: "auto" }}
          className="cursor-pointer absolute left-0 z-30 size-10 rounded-full bg-[#0B1838] text-white flex items-center justify-center shadow-lg opacity-20 focus:opacity-100 group-hover:opacity-100 transition-opacity"
        >
          {"<"}
        </button>

        {/* Contenedor del Carrusel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="h-[250px] w-full flex items-center overflow-x-auto scrollbar-hide whitespace-nowrap px-3"
        >
          {marqueeCards.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onClick={() => click(project)}
              className="inline-block shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 relative z-10 p-1"
            >
              <Cards {...project} lag1="" lag2="" lag3="" />
            </div>
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          onPointerDown={() => scroll("right")}
          style={{ pointerEvents: "auto" }}
          className="cursor-pointer absolute right-0 z-30 size-10 rounded-full bg-[#0B1838] text-white flex items-center justify-center shadow-lg opacity-20 focus:opacity-100 group-hover:opacity-100 transition-opacity"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
