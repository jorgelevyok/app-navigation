import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Chip, Divider, Text } from "react-native-paper";

import { AppHeader } from "@/components/AppHeader";
import { BotonVolver } from "@/components/BotonVolver";
import { ModuloCard } from "@/components/ModuloCard";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { getRelatedModulos } from "@/data/modulos";
import { type NativeStackScreenProps } from "@/navigation/reactNavigation";
import { sharedStyles, spacing } from "@/theme/sharedStyles";
import type { HomeStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<HomeStackParamList, "Details">;

export default function DetailsScreen({ navigation, route }: Props) {
  const { item } = route.params;
  const relacionados = getRelatedModulos(item);

  return (
    <ScreenWrapper>
      <AppHeader title="Detalle" showBack />
      <ScrollView contentContainerStyle={sharedStyles.content}>
        <View style={styles.block}>
          <View style={sharedStyles.chips}>
            <Chip compact>{item.category}</Chip>
            <Chip compact>{item.level}</Chip>
            <Chip compact>{item.duration}</Chip>
          </View>
          <Text variant="headlineSmall">{item.name}</Text>
          <Text variant="bodyLarge">{item.description}</Text>
        </View>

        <Divider style={styles.divider} />

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Relacionados (navigation.push)
        </Text>
        <Text variant="bodyMedium" style={styles.hint}>
          push agrega otra pantalla Details a la pila. Así se puede abrir el
          mismo tipo de pantalla varias veces y volver con goBack().
        </Text>
        <View style={styles.related}>
          {relacionados.map((modulo) => (
            <ModuloCard
              key={modulo.id}
              item={modulo}
              onPress={(siguiente) => navigation.push("Details", { item: siguiente })}
            />
          ))}
        </View>

        <View style={styles.actions}>
          <BotonVolver />
          <Button mode="contained" onPress={() => navigation.navigate("Home")}>
            Ir al listado
          </Button>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  divider: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    marginBottom: spacing.xs,
  },
  hint: {
    marginBottom: spacing.sm,
    opacity: 0.8,
  },
  related: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  actions: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
});
