import { StyleSheet } from "react-native";

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
    padding: spacing.sm,
  },
  listContent: {
    padding: spacing.sm,
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
    right: spacing.sm,
    bottom: spacing.sm,
  },
});
