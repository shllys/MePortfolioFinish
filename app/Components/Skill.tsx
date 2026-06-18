import React, { useEffect, useState } from "react";

interface SkillProps {
  name: string;
  borderC: string;
  cantidad: string; // Ejemplo: "80%"
}

function Skill(props: SkillProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Extrae el número de la cadena (por ejemplo, "80%" => 80)
    const target = parseInt(props.cantidad);
    if (isNaN(target)) return;

    let current = 0;
    const step = Math.ceil(target / 30); // Ajusta la velocidad aquí
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20); // Ajusta la velocidad aquí

    return () => clearInterval(interval);
  }, [props.cantidad]);

  return (
    <div>
      <div className="bg-[#00000080] w-30 h-20 md:w-36 rounded-2xl p-2">
        <div className="flex justify-between items-center">
          <div
            className={`size-5 rounded-lg bg-transparent border-2 ${props.borderC}`}
          ></div>
          <h1 className="text-[20px] font-smooch">{count}%</h1>
        </div>
        <h3 className="mt-3 text-[16px] md:text-[18px] flex justify-center font-itim">
          {props.name}
        </h3>
      </div>
    </div>
  );
}

export default Skill;
