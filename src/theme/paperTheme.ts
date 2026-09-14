import { MD3LightTheme, type MD3Theme } from "react-native-paper";

export const paperTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#1565C0",
    onPrimary: "#FFFFFF",
    primaryContainer: "#D0E4FF",
    onPrimaryContainer: "#001D36",
    secondary: "#00897B",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#B2DFDB",
    onSecondaryContainer: "#00201C",
    tertiary: "#5C6BC0",
    background: "#F4F7FB",
    surface: "#FFFFFF",
    surfaceVariant: "#E3EDF6",
    outline: "#73777F",
  },
};
