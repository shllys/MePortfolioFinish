"use client";
import { useRef } from "react";
import Cards from "./Cards";
import { cardsData, type ProjectCard } from "../data/cardsData";

function Carrusel({ click }: { click: (p: ProjectCard) => void }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const amount = dir === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="h-60 md:h-full w-full flex flex-col justify-center items-center py-1.5">
      <h2 className="text-center -mb-10 mt-10 md:-mb-5 text-amber-50 text-[30px] font-smooch">
        PORTFOLIO
      </h2>

      <div className="relative flex items-center w-full max-w-4xl px-2 group h-80">
        {/* Botones con z-index alto para asegurar el click */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="cursor-pointer absolute left-0 z-30 size-10 rounded-full bg-[#0B1838] text-white flex items-center justify-center shadow-lg opacity-20 focus:opacity-100 group-hover:opacity-100 transition-opacity"
        >
          {"<"}
        </button>

        <div
          ref={carouselRef}
          className="h-[250px] md:w-auto flex items-center overflow-x-auto scrollbar-hide space-x-2 mx-3 scroll-smooth scale-80 md:scale-100"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cardsData.map((project) => (
            <div
              key={project.id}
              onClick={() => click(project)}
              className="shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 relative z-10"
              style={{ scrollSnapAlign: "center" }}
            >
              <Cards {...project} lag1="" lag2="" lag3="" />
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-0 z-30 size-10 rounded-full bg-[#0B1838] text-white flex items-center justify-center shadow-lg opacity-20 focus:opacity-100 group-hover:opacity-100 transition-opacity"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
