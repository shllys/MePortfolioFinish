"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectCard } from "../data/cardsData";

interface CardProps extends ProjectCard {
  onViewClick?: () => void;
}

const Reveal = ({
  title,
  img,
  description,
  activo,
  contenido,
  slug,
  onViewClick,
}: CardProps) => {
  const hrefLink = `/${slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col space-y-4"
    >
      <div className="relative overflow-hidden rounded-2xl group shadow-xl scale-90 md:scale-100">
        <Image
          src={`/img/${img}`} // Asegúrate de tener una imagen por defecto
          alt={title}
          width={400}
          height={200}
          className="object-cover h-48 w-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="text-amber-50 w-full text-end px-2">
        <div className="flex items-center justify-between space-x-2 ">
          {activo ? (
            <span className="size-3 bg-emerald-300 rounded-full drop-shadow-lg drop-shadow-emerald-300 px-4 font-bold">
              On
            </span>
          ) : (
            <span className="size-3 border-1 border-white rounded-full" />
          )}
        </div>
        <h2 className="text-4xl underline font-smooch decoration-amber-200/50 italic">
          {title}
        </h2>
        <p className="m-2 font-itim text-md leading-snug opacity-90">
          {description}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex justify-center"
        >
          {contenido ? (
            <Link
              href={hrefLink}
              onClick={onViewClick}
              className={`inline-block py-1 w-44 text-2xl rounded-2xl text-center font-smooch transition-all 
            bg-blue-800 text-white hover:bg-blue-500 shadow-lg`}
            >
              View Project
            </Link>
          ) : (
            <button
              className={`inline-block py-1 w-44 text-2xl rounded-2xl text-center font-smooch transition-all 
            bg-gray-800 text-white hover:bg-gray-500 shadow-lg`}
            >
              Proximamente
            </button>
          )}
        </motion.div>
        <hr className="w-3/4 border-t-2 border-white mx-auto my-4 opacity-30" />
      </div>
    </motion.article>
  );
};

export default Reveal;
