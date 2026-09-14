import { StyleSheet } from "react-native";

/** Grilla de 8 px pedida por Material Design 3. */
export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const sharedStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    gap: spacing.sm,
  },
  section: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
  },
  fab: {
    position: "absolute",
    right: spacing.md,
    bottom: spacing.md,
  },
});
