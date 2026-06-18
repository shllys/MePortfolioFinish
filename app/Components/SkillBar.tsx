import React, { useEffect, useState } from "react";
import Image from "next/image";

interface SkillBarProps {
  year: string;
  name: string;
  img: string;
  borderColor: string;
  cantidad: string; // Ejemplo: "w-60"
}

function SkillBar(props: SkillBarProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación al montar el componente
    setAnimate(true);
  }, []);

  return (
    <div>
      <div>
        <div className="bg-[#00000080] w-60 md:w-75 m-2 p-3 rounded-2xl">
          <div className="flex justify-between items-center text-[16px] ml-2 mr-2">
            <h3 className="flex font-itim">
              <Image
                className="mb-1 mr-2"
                src={`./${props.img}`}
                alt={`${props.name} icon`}
                width={20} // Ajusta si lo necesitas más grande o más pequeño
                height={20}
                unoptimized // opcional, si son GIFs o no quieres compresión
              />
              {props.name}
            </h3>
            <h3 className="font-smooch text-[20px]">{props.year}</h3>
          </div>
          <div
            className={`h-3 w-auto p-0.5 rounded-lg bg-transparent border-2 ${props.borderColor}`}
          >
            <div
              className={`h-1 mt-0.3 rounded-lg bg-[#19ebf29b] transition-all duration-1000 ${
                animate ? props.cantidad : "w-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
