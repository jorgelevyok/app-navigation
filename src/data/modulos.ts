import type { Modulo } from "@/types/navigation";

export const MODULOS: Modulo[] = [
  {
    id: "1",
    name: "Stack Navigator",
    category: "Navegación",
    duration: "25 min",
    level: "Básico",
    description:
      "Apila pantallas una encima de otra. Sirve para flujos lineales como Lista → Detalle y para volver atrás con goBack().",
    relatedIds: ["3", "4"],
  },
  {
    id: "2",
    name: "Tab Navigator",
    category: "Navegación",
    duration: "20 min",
    level: "Básico",
    description:
      "Menú inferior persistente. Cada pestaña suele ser una sección principal de la app: Inicio, Explorar o Perfil.",
    relatedIds: ["4", "1"],
  },
  {
    id: "3",
    name: "Parámetros de ruta",
    category: "Datos",
    duration: "15 min",
    level: "Intermedio",
    description:
      "Se envían con navigation.navigate('Details', { item }) y se leen en destino con route.params. Es el 'equipaje' del viaje.",
    relatedIds: ["1", "5"],
  },
  {
    id: "4",
    name: "Navegación anidada",
    category: "Arquitectura",
    duration: "30 min",
    level: "Intermedio",
    description:
      "Un Stack dentro de un Tab permite entrar al detalle sin perder el menú inferior. No conviene anidar más de dos niveles.",
    relatedIds: ["1", "2"],
  },
  {
    id: "5",
    name: "Hooks de navegación",
    category: "API",
    duration: "18 min",
    level: "Intermedio",
    description:
      "useNavigation y useRoute sirven cuando el componente no es una pantalla registrada. Las pantallas reciben navigation y route por props.",
    relatedIds: ["3", "1"],
  },
  {
    id: "6",
    name: "Material Design 3",
    category: "UI/UX",
    duration: "22 min",
    level: "Básico",
    description:
      "Espaciado en múltiplos de 8 px, ripple al tocar y componentes consistentes con React Native Paper (Card, Appbar, Chip, Button).",
    relatedIds: ["2", "4"],
  },
];

export function getModuloById(id: string): Modulo | undefined {
  return MODULOS.find((modulo) => modulo.id === id);
}

export function getRelatedModulos(item: Modulo): Modulo[] {
  return item.relatedIds
    .map(getModuloById)
    .filter((modulo): modulo is Modulo => modulo != null);
}

export const CATEGORIAS = [...new Set(MODULOS.map((modulo) => modulo.category))];
