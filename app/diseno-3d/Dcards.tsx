"use client";

import Image from "next/image";
import { useState } from "react";
useState;

interface DcardsProps {
  row?: string;
  img1?: string;
  img01?: string;
  img2?: string;
  img02?: string;
  img3?: string;
  img03?: string;
  asset?: string;
  title1?: string;
  desc1?: string;
  desc2?: string;
  link?: string;
  desing?: string;
}

function Dcards(props: DcardsProps) {
  const rowClass =
    props.row === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";
  const [activeTab, setActiveTab] = useState<
    "render" | "wireframe" | "textures"
  >("render");

  return (
    <>
      <section
        className={`lg:mt-10 w-full flex flex-col ${rowClass} items-center gap-8`}
      >
        {/* Caja de Imagenes */}
        <div className="w-full max-w-4xl mx-auto mt-4">
          <div className="relative group rounded-2xl p-[2px] border-t border-b border-[#C8DDF5]/60">
            <div className="relative w-full rounded-2xl overflow-hidden border-t border-b border-[#C8DDF5]/60">
              {/* ASSET */}
              <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-gradient-to-b from-[#C8DDF5]/30 to-[#C8DDF5]/10 backdrop-blur-xs border-b border-[#C8DDF5]/50 gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-emerald-200 uppercase drop-shadow-lg font-bold">
                    Asset 3D • {props.asset}
                  </span>
                </div>
              </div>
              {/* Imágenes, view */}
              <div className="relative aspect-video w-full flex items-center justify-center p-4 overflow-hidden">
                {activeTab === "render" && (
                  <div className="relative w-full max-w-2xl aspect-video rounded-2xl border-2 border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm border-l-10 border-t-10 ">
                    {/* Contenedor del carrusel con fade automático */}

                    <div className="absolute inset-0 fade-carousel rounded-2xl">
                      <div className="slide">
                        <Image
                          src={`/renders/${props.img1}`}
                          alt=""
                          fill
                          className="object-cover rounded-lg border border-white/20"
                          priority
                        />
                      </div>

                      <div className="slide">
                        <Image
                          src={`/renders/${props.img2}`}
                          alt=""
                          fill
                          className="object-cover rounded-lg border border-white/20"
                        />
                      </div>

                      <div className="slide">
                        <Image
                          src={`/renders/${props.img3}`}
                          alt="Otra vista del proyecto"
                          fill
                          className="object-cover rounded-lg border border-white/20"
                        />
                      </div>

                      {/* Duplicamos la primera para que el loop sea más suave */}
                    </div>
                  </div>
                )}

                {activeTab === "wireframe" && (
                  <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                    <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                    {/* Contenedor del carrusel con fade automático */}
                    <div className="absolute inset-0 fade-carousel rounded-2xl">
                      <div className="slide">
                        <Image
                          src={`/renders/${props.img01}`}
                          alt=""
                          fill
                          className="object-cover rounded-lg border border-white/20"
                          priority
                        />
                      </div>

                      <div className="slide">
                        <Image
                          src={`/renders/${props.img02}`}
                          alt=""
                          fill
                          className="object-cover rounded-lg border border-white/20"
                        />
                      </div>

                      <div className="slide">
                        <Image
                          src={`/renders/${props.img03}`}
                          alt="Otra vista del proyecto"
                          fill
                          className="object-cover rounded-lg border border-white/20"
                        />
                      </div>

                      {/* Duplicamos la primera para que el loop sea más suave */}
                    </div>
                  </div>
                )}

                {/* {activeTab === "textures" && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 animate-fadeIn">
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                        Paleta Stylized (Hand-Painted)
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Mapeo de color directo sobre UV Unwrapped Mesh
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-16 h-16 rounded-xl bg-[#4B83F2] border border-zinc-700 shadow-md" />
                        <span className="text-[10px] font-mono text-zinc-400">
                          #4B83F2
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-16 h-16 rounded-xl bg-[#9BCB98] border border-zinc-700 shadow-md" />
                        <span className="text-[10px] font-mono text-zinc-400">
                          #9BCB98
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-16 h-16 rounded-xl bg-[#E4E0AF] border border-zinc-700 shadow-md" />
                        <span className="text-[10px] font-mono text-zinc-400">
                          #E4E0AF
                        </span>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
              {/* Controles de visualización */}
              <div className="px-6 py-4 bg-gradient-to-t from-[#C8DDF5]/30 to-[#C8DDF5]/10 backdrop-blur-xs border-t border-[#C8DDF5]/50 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-4 text-zinc-900">
                  <span>
                    Format:{" "}
                    <strong className="text-emerald-400">.FBX / .BLEND</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#141629]/80 p-1.5 rounded-xl border border-zinc-800/80">
                  <button
                    onClick={() => setActiveTab("render")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === "render"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Render Final
                  </button>

                  <span>|</span>

                  <button
                    onClick={() => setActiveTab("wireframe")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === "wireframe"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Malla (Wireframe)
                  </button>

                  {/* <button
                    onClick={() => setActiveTab("textures")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === "textures"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Texturas
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Texto descriptivo */}
        <div className="w-full lg:max-w-md lg:flex lg:flex-col justify-center gap-4">
          <h2 className="text-2xl lg:text-3xl font-smooch font-bold text-black p-4 rounded-lg text-shadow-lg bg-[#C8DDF5]/50 backdrop-blur-sm">
            {props.title1}
          </h2>
          <hr className="border-white/40 my-2" />
          <p className="text-sm lg:text-lg backdrop-blur-sm font-smooch font-semibold text-black leading-relaxed max-w-full p-4 rounded-lg text-shadow-lg bg-[#C8DDF5]/50 whitespace-pre-line">
            {props.desc1}
          </p>
        </div>
      </section>
      <div className="w-full lg:flex lg:flex-col justify-center py-6">
        <p className="text-sm lg:text-lg backdrop-blur-sm font-smooch font-semibold text-black leading-relaxed max-w-full p-4 rounded-lg text-shadow-lg bg-[#C8DDF5]/50 whitespace-pre-line">
          {props.desc2}
        </p>
      </div>

      <div className="flex justify-start lg:justify-between w-full">
        {props.desing === "#" ? (
          <span className=""></span>
        ) : (
          <a
            href={props.desing}
            rel="noopener noreferrer"
            className="mt-6 text-[#C8DDF5] hover:text-[#ffffff] transition-colors drop-shadow-lg drop-shadow-fuchsia-200 px-4 py-1 font-bold border rounded-2xl bg-fuchsia-400/20"
          >
            Ver Desarrollo →
          </a>
        )}

        {props.link === "#" ? (
          <span className="mt-6 text-esmerald-400 drop-shadow-lg drop-shadow-emerald-200 px-4 py-1 font-bold border rounded-2xl bg-emerald-500/30 text-lg">
            En desarrollo
          </span>
        ) : (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-[#C8DDF5] hover:text-[#ffffff] transition-colors drop-shadow-lg drop-shadow-cyan-300 px-5 py-1 font-bold border rounded-2xl bg-blue-400/20"
          >
            + Diseños
          </a>
        )}
      </div>
    </>
  );
}

export default Dcards;
