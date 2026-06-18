export interface ProjectCard {
  id: string;
  title: string;
  slug: string;
  img: string;
  description: string;
  activo: boolean;
  contenido: boolean;
}

export const cardsData: ProjectCard[] = [
  {
    id: "web-develop",
    title: "Web Develop",
    slug: "web-develop",
    img: "Web.png",
    description: "Desarrollo web...",
    activo: true,
    contenido: true,
  },
  {
    id: "diseno-3d",
    title: "Diseño 3D",
    slug: "diseno-3d",
    img: "Blender.png",
    description: "Modelado 3D...",
    activo: false,
    contenido: true,
  },
  {
    id: "consept-art",
    title: "Consept Art",
    slug: "consept-art",
    img: "Paramont.png",
    description: "Arte conceptual...",
    activo: false,
    contenido: false,
  },
  {
    id: "ux-ui",
    title: "UX UI",
    slug: "ux-ui",
    img: "Design.png",
    description: "Diseño UX/UI...",
    activo: false,
    contenido: false,
  },
];
