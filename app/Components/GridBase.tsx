import React from "react";

interface GridBaseProps {
  children?: React.ReactNode;
  order?: string;
  img?: string;
  isVisible?: boolean; // Prop para controlar la animación de entrada/salida
}

function GridBase({ order, img, children, isVisible = true }: GridBaseProps) {
  return (
    <div
      className={`
        text-[#C8DDF5] bg-linear-to-r from-[#0B183880] to-[#C8DDF540] 
        rounded-2xl backdrop-blur-xs border-4 border-[#bacee680] hover:shadow-2xl hover:shadow-[#C8DDF560]/70 hover:border-[#ffffff80]
        transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        ${order} ${img}
      `}
    >
      {children}
    </div>
  );
}

export default GridBase;
