"use client";
import { useState } from "react";

import GridBase from "./Components/GridBase";
import Carrusel from "./Components/Carrusel";
import Reveal from "./Components/Reveal";
import Skill from "./Components/Skill";
import SkillBar from "./Components/SkillBar";
import Image from "next/image";
import Cards_me from "./Components/Cards_me";
import { cardsData, type ProjectCard } from "./data/cardsData";
import Contact_me from "./Components/Contact_me";

export default function Home() {
  // Estado independiente para cada carrusel
  const [selectedReveal, setSelectedReveal] = useState(cardsData[0]);

  // Funciones para manejar el click en cada carrusel
  const handleRevealClick = (revealProps: ProjectCard) => {
    setSelectedReveal(revealProps);
  };

  return (
    <>
      <div className="m-3 w-full h-full border-3 border-[#c8ddf550] rounded-2xl">
        <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 md:gap-6 grid-rows-7 lg:h-280">
          {/* About_me */}
          <GridBase order="col-span-2 row-span-2 lg:h-auto mb-5 lg:mb-0">
            <div>
              <div className="border-2 border-[C8DDF5]/20 w-[60%] md:w-[70%] h-[10%] md:h-[13%] absolute rounded-br-2xl rounded-tl-2xl -top-0.5 -left-0.5"></div>
              <div className="flex flex-col items-end justify-center h-full p-5 md:p-2 md:mx-4 text-white">
                <h3 className="text-2xl md:text-4xl font-smooch underline">
                  About me
                </h3>

                {/* recuerda colocar: trabajo con figma, */}

                <p className="text-[14px] md:text-[18px] lg:text-[1.10em] my-4 text-justify font-itim">
                  Soy Desarrolladora Front-End Jr. y Diseñadora UI. Me dedico a
                  construir el puente entre la experiencia visual de un usuario
                  y la arquitectura técnica del software. Soy una mente curiosa
                  y autodidacta por naturaleza, Me apasiona transformar ideas
                  abstractas, paletas de colores y bocetos de Figma en
                  aplicaciones web interactivas, rápidas y accesibles utilizando
                  herramientas moderna; disfruto tanto ejecutando código como
                  experimentando con luces, sombras e ilustración en Blender. Mi
                  objetivo es diseñar interfaces que atrapen la mirada y
                  programar sistemas que funcionen a la perfección.
                </p>
              </div>
            </div>
          </GridBase>

          {/* --------------------------------- */}

          {/* View */}
          <GridBase order="row-span-6 border-2 mb-5 lg:mb-0">
            <div className="flex flex-col items-center justify-evenly h-full">
              <section className="text-2xl text-white flex flex-col items-center justify-center w-full">
                <h1 className="text-center text-white my-2">Habilidades</h1>

                <div className="grid grid-flow-col grid-rows-2 md:grid-cols-2 p-2 gap-2 md:gap-4">
                  <Skill
                    name="Trj. en Equipo"
                    borderC="border-cyan-300"
                    cantidad="80%"
                  />
                  <Skill
                    name="Integridad"
                    borderC="border-fuchsia-900"
                    cantidad="100%"
                  />
                  <Skill
                    name="Adaptabilidad"
                    borderC="border-emerald-400"
                    cantidad="70%"
                  />
                  <Skill
                    name="Dev. Personal"
                    borderC="border-blue-600"
                    cantidad="90%"
                  />
                </div>

                <hr className="w-40 my-2" />

                <div>
                  <SkillBar
                    year="1 Año Exp."
                    name="Next.js"
                    img="next.png"
                    borderColor="border-blue-950"
                    cantidad="w-32"
                  />
                  <SkillBar
                    year="1/2 Año Exp."
                    name="React"
                    img="React.png"
                    borderColor="border-blue-700"
                    cantidad="w-40"
                  />
                  <SkillBar
                    year="1 Año Exp."
                    name="Tailwind"
                    img="tailwindcss.png"
                    borderColor="border-blue-700"
                    cantidad="w-25"
                  />
                  <SkillBar
                    year="-1 Año Exp."
                    name="TypeScript"
                    img="typescript.png"
                    borderColor="border-blue-500"
                    cantidad="w-17"
                  />
                </div>
              </section>

              <hr className="w-40 my-2" />

              <section className="rounded-2xl flex flex-col justify-between w-full md:w-[90%]">
                <Reveal key={selectedReveal.title} {...selectedReveal} />
              </section>
            </div>
          </GridBase>

          {/* --------------------------------- */}

          {/* Bar_Img */}
          <GridBase
            order="col-span-2 row-span-1 mb-5 lg:mb-0"
            img="bg-[url(/img/Ruinas1.png)] bg-cover bg-center border-4 border-[#C8DDF560]"
          />

          {/* --------------------------------- */}

          {/* Carrusel */}
          <GridBase order="col-span-2 row-span-2 mb-5 lg:mb-0">
            <Carrusel click={handleRevealClick} />
          </GridBase>

          {/* --------------------------------- */}

          {/* Cards_me */}
          <GridBase order="col-span-1 row-span-2 md:row-span-1 mb-5 lg:mb-0">
            <div className="border-2 border-[C8DDF5]/20 w-[17%] h-[32%] absolute rounded-br-2xl rounded-tl-2xl -top-0.5 -left-0.5">
              <Image
                src="/img/Info.png"
                alt="Contacto"
                width={50}
                height={70}
                className="object-cover scale-100"
                priority
                unoptimized
              />
            </div>
            <Cards_me
              pages={[
                {
                  title: "Estudios",
                  name: "Web Frontend",
                  fecha: "Sep-23 / Jun-24",
                  textone:
                    "°Curso de Desarrollo Web Frontend en |Espacio Educa|, con enfoque en tecnologías modernas como React, TypeScript y BootStrap°",
                },
                {
                  title: "Cursos Extra",
                  name: "JavaScript Avanzado",
                  fecha: "2024",
                  textone:
                    "°Certificación en lógica de programación y algoritmos°",
                },
              ]}
            />
          </GridBase>

          <GridBase order="col-span-1 row-span-2 md:row-span-1 mb-5 lg:mb-0">
            <div className="border-2 border-[C8DDF5]/20 w-[17%] h-[32%] absolute rounded-br-2xl rounded-tl-2xl -top-0.5 -left-0.5">
              <Image
                src="/img/Info.png"
                alt="Contacto"
                width={50}
                height={70}
                className="object-cover scale-100 cursor-pointer"
                priority
                unoptimized
              />
            </div>

            <Cards_me
              pages={[
                {
                  title: "Experiencia Laboral",
                  name: "Desarrollo Web Odoo",
                  fecha: "Sep / Jun-24",
                  textone:
                    "°Desarrollo de Pagina web para clientes, utilizando Odoo, plataforma (ERP) en la que he implementado y construido la Web de |ESMT|°",
                },
                {
                  title: "Experiencia Laboral",
                  name: "Odoo",
                  fecha: "Jul-24 / ---",
                  textone:
                    "°Desarrollo en Soporte Interno, manejando modulos de Odoo°",
                },
              ]}
            />
          </GridBase>

          {/* --------------------------------- */}

          {/* BottomBar */}
          <GridBase order="col-span-3 row-span-1">
            <section>
              <p className="p-4 text-center font-smooch font-bold text-lg">
                Si estás interesado en colaborar o simplemente quieres charlar
                sobre desarrollo web, ¡No dudes en contactarme!
              </p>

              <hr className="w-50 md:w-100 m-auto border-blue-200/50" />

              <div className="flex flex-col md:flex-row items-center justify-center">
                <Contact_me
                  name="Enviar"
                  link="Enviar Correo"
                  action="mail"
                  href="mailto:Shllygp17.8@gmail.com"
                />
                <Contact_me
                  name="In"
                  link="Perfil LinkedIn"
                  action="link"
                  href="https://www.linkedin.com/in/mishelis-y-martinez/"
                />
                <Contact_me
                  name="gith"
                  link="Perfil GitHub"
                  action="link"
                  href="https://github.com/shllys"
                />
                {/* <Contact_me
                  name="Insta"
                  link="Perfil Ilustraciones"
                  action="link"
                  href="https://www.instagram.com/shellys.axel/"
                /> */}
                <Contact_me
                  name="File"
                  link="Obten CV"
                  action="download"
                  href="/CV_ShellysV2.pdf"
                />
              </div>
            </section>
          </GridBase>
        </div>
      </div>
    </>
  );
}
