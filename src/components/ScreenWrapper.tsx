import { type ReactNode } from "react";
import { StyleSheet, View, type ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

export function ScreenWrapper({ children, style }: Props) {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.screen, { backgroundColor: theme.colors.background }, style]}
    >
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
