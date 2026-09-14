import type { NavigatorScreenParams } from "expo-router/react-navigation";

export type Modulo = {
  id: string;
  name: string;
  category: string;
  duration: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  description: string;
  relatedIds: string[];
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { item: Modulo };
};

export type TabParamList = {
  Inicio: NavigatorScreenParams<HomeStackParamList> | undefined;
  Explorar: undefined;
  Perfil: undefined;
};
