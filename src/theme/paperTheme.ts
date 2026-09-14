import { MD3LightTheme, type MD3Theme } from "react-native-paper";

/**
 * Paleta MD3 (semilla ámbar sobre crema).
 * Appbar, Card, Chip, Button y FAB toman estos tokens sin cambiar componentes.
 */
export const paperTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 3,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6F5D00",
    onPrimary: "#FFFFFF",
    primaryContainer: "#F5D76A",
    onPrimaryContainer: "#221B00",
    secondary: "#5C5346",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#EFE2BB",
    onSecondaryContainer: "#1B1708",
    tertiary: "#2F6B45",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#D9F6E0",
    onTertiaryContainer: "#00210C",
    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    background: "#F6F5F1",
    onBackground: "#1C1B16",
    surface: "#FFFBFF",
    onSurface: "#1C1B16",
    surfaceVariant: "#ECE2C6",
    onSurfaceVariant: "#4C4639",
    outline: "#7D7767",
    outlineVariant: "#CFC6B4",
    inverseSurface: "#31302A",
    inverseOnSurface: "#F4F0E7",
    inversePrimary: "#D8C070",
    shadow: "#000000",
    scrim: "#000000",
    elevation: {
      level0: "transparent",
      level1: "#F3F0E8",
      level2: "#EFEBE0",
      level3: "#EBE6D8",
      level4: "#E9E4D4",
      level5: "#E6E0CF",
    },
  },
};
