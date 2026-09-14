import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { paperTheme } from "@/theme/paperTheme";

export default function RootLayout() {
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
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
