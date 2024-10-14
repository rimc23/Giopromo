interface Categoria {
  id: string;
  nombre: string;
  icon: string;
}

export const categorias: Categoria[] = [
  { id: "agendas", nombre: "AGENDAS", icon: "/icons/agendas.svg" },
  { id: "antiestres", nombre: "ANTIESTRES", icon: "/icons/antiestres.svg" },
  {
    id: "audio-y-bocinas",
    nombre: "AUDIO Y BOCINAS",
    icon: "/icons/audioybocinas.svg",
  },
  { id: "bar", nombre: "BAR", icon: "/icons/bar.svg" },
  {
    id: "belleza-y-cuidado",
    nombre: "BELLEZA Y CUIDADO PERSONAL",
    icon: "/icons/belleza y cuidado.svg",
  },
  { id: "boligrafos", nombre: "BOLÍGRAFOS", icon: "/icons/boligrafos.svg" },
  { id: "bolsas", nombre: "BOLSAS", icon: "/icons/bolsas.svg" },
  { id: "camisas", nombre: "CAMISAS Y PLAYERAS", icon: "/icons/camisas.svg" },
  { id: "cilindros", nombre: "CILINDROS", icon: "/icons/cilindros.svg" },
  { id: "deportes", nombre: "DEPORTES", icon: "/icons/deportes.svg" },
  {
    id: "entretenimiento",
    nombre: "ENTRETENIMIENTO",
    icon: "/icons/entretenimiento.svg",
  },
  {
    id: "escolar",
    nombre: "ESCOLAR Y NIÑOS",
    icon: "/icons/escolar y niños.svg",
  },
  { id: "gorras", nombre: "GORRAS", icon: "/icons/gorras.svg" },
  {
    id: "herramientas",
    nombre: "HERRAMIENTAS Y AUTOMOVIL",
    icon: "/icons/herramientas y automovil.svg",
  },
  {
    id: "hieleras",
    nombre: "HIELERAS Y LONCHERAS",
    icon: "/icons/hieleras.svg",
  },
  { id: "hogar", nombre: "HOGAR", icon: "/icons/hogar.svg" },
  { id: "libretas", nombre: "LIBRETAS", icon: "/icons/libretas.svg" },
  { id: "llaveros", nombre: "LLAVEROS", icon: "/icons/llaveros.svg" },
  { id: "maletas", nombre: "MALETAS", icon: "/icons/maletas.svg" },
  { id: "mochilas", nombre: "MOCHILAS", icon: "/icons/mochilas.svg" },
  { id: "oficina", nombre: "OFICINA", icon: "/icons/oficina.svg" },
  {
    id: "paraguas",
    nombre: "PARAGUAS E IMPERMEABLES",
    icon: "/icons/paraguas.svg",
  },
  {
    id: "portaretratos",
    nombre: "PORTARETRATOS",
    icon: "/icons/portaretratos.svg",
  },
  {
    id: "reconocimientos",
    nombre: "RECONOCIMIENTOS",
    icon: "/icons/reconocimientos.svg",
  },
  { id: "relojes", nombre: "RELOJES", icon: "/icons/relojes.svg" },
  { id: "salud", nombre: "SALUD", icon: "/icons/salud.svg" },
  { id: "tecnologia", nombre: "TECNOLOGÍA", icon: "/icons/tecnologia.svg" },
  {
    id: "termos",
    nombre: "TERMOS TAZAS Y VASOS",
    icon: "/icons/termos y tazas.svg",
  },
  { id: "viaje", nombre: "VIAJE", icon: "/icons/viajes.svg" },
];

export const materials = [
  {
    id: "plastico",
    nombre: "Plastico",
  },
  {
    id: "aluminio",
    nombre: "Aluminio",
  },
  {
    id: "madera",
    nombre: "Madera",
  },
  {
    id: "con_estuche",
    nombre: "Con Estuche",
  },
];

export const technique = [
  {
    id: "serigrafia",
    nombre: "Serigrafia",
  },
  {
    id: "sublimacion",
    nombre: "Sublimacion",
  },
  {
    id: "tampografia",
    nombre: "Tampografia",
  },
  {
    id: "grabado_laser",
    nombre: "Grabado Laser",
  },
];

export const color = [
  {
    id: "negro",
    nombre: "black",
  },
  {
    id: "naranja",
    nombre: "orange",
  },
  {
    id: "rojo",
    nombre: "red",
  },
  {
    id: "amarillo",
    nombre: "yellow",
  },
  {
    id: "verde",
    nombre: "green",
  },
];

interface Color {
  name: string;
  class: string;
}

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  imagen: string;
  colores?: Color[];
}

export const productosDestacados: Producto[] = [
  {
    id: 1,
    nombre: "CILINDRO METÁLICO",
    codigo: "BB7101",
    imagen: "/images/CILINDRO DESTACADO.jpg",
    colores: [
      { name: "Negro", class: "bg-black" },
      { name: "Gris", class: "bg-gray-500" },
      { name: "Azul", class: "bg-blue-500" },
      { name: "Rojo", class: "bg-red-500" },
    ],
  },
  {
    id: 2,
    nombre: "BOLÍGRAFO PLÁSTICO",
    codigo: "A2102",
    imagen: "/images/BOLIGRAFO NARANJA.jpg",
    colores: [
      { name: "Amarillo", class: "bg-yellow-500" },
      { name: "Azul", class: "bg-blue-500" },
      { name: "Negro", class: "bg-black" },
      { name: "Naranja", class: "bg-orange-500" },
      { name: "Rosa", class: "bg-pink-500" },
      { name: "Verde", class: "bg-green-500" },
      { name: "Rojo", class: "bg-red-500" },
    ],
  },
  {
    id: 3,
    nombre: "DIARIO 2023",
    codigo: "AD2023",
    imagen: "/images/Diaria 2023.jpeg",
    colores: [
      { name: "Marrón", class: "bg-amber-800" },
      { name: "Gris", class: "bg-gray-300" },
      { name: "Negro", class: "bg-black" },
    ],
  },
];