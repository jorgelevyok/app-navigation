import { useEffect } from "react";
import { AppState, Platform } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationBar, addVisibilityListener } from "expo-navigation-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { paperTheme } from "@/theme/paperTheme";

function useOcultarBotonesDelCelular() {
  useEffect(() => {
    if (Platform.OS !== "android") {
      return;
    }

    const ocultar = () => NavigationBar.setHidden(true);
    ocultar();

    const app = AppState.addEventListener("change", (estado) => {
      if (estado === "active") {
        ocultar();
      }
    });

    const visibilidad = addVisibilityListener(({ visibility }) => {
      if (visibility === "visible") {
        ocultar();
      }
    });

    return () => {
      app.remove();
      visibilidad.remove();
    };
  }, []);
}

export default function RootLayout() {
  useOcultarBotonesDelCelular();

  return (
    <PaperProvider
      theme={paperTheme}
      settings={{
        icon: ({ name, color, size, direction }) => (
          <MaterialCommunityIcons
            name={name}
            color={color}
            size={size}
            style={{ transform: [{ scaleX: direction === "rtl" ? -1 : 1 }] }}
          />
        ),
      }}
    >
      <SafeAreaProvider>
        <NavigationBar hidden />
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
