import { Card, Chip, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import { spacing } from "@/theme/sharedStyles";
import type { Modulo } from "@/types/navigation";

type Props = {
  item: Modulo;
  onPress: (item: Modulo) => void;
};

export function ModuloCard({ item, onPress }: Props) {
  return (
    <Card mode="elevated" onPress={() => onPress(item)}>
      <Card.Content style={styles.content}>
        <View style={styles.chips}>
          <Chip compact>{item.category}</Chip>
          <Chip compact>{item.level}</Chip>
        </View>
        <Text variant="titleMedium">{item.name}</Text>
        <Text variant="bodyMedium" style={styles.description}>
          {item.description}
        </Text>
        <Text variant="labelMedium">{item.duration}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xs,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
  },
  description: {
    opacity: 0.8,
  },
});
