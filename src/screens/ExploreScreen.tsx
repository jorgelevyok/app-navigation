import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";

import { AppHeader } from "@/components/AppHeader";
import { ModuloCard } from "@/components/ModuloCard";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { CATEGORIAS, MODULOS } from "@/data/modulos";
import { type BottomTabScreenProps } from "@/navigation/reactNavigation";
import { sharedStyles, spacing } from "@/theme/sharedStyles";
import type { TabParamList } from "@/types/navigation";

type Props = BottomTabScreenProps<TabParamList, "Explorar">;

export default function ExploreScreen({ navigation }: Props) {
  return (
    <ScreenWrapper>
      <AppHeader title="Explorar" subtitle="Navegación anidada hacia Details" />
      <ScrollView contentContainerStyle={sharedStyles.content}>
        <Text variant="bodyMedium" style={styles.intro}>
          Desde esta pestaña se entra al Stack de Inicio sin perder el menú
          inferior: navigation.navigate('Inicio', {"{ screen: 'Details', params }"}).
        </Text>
        <View style={[sharedStyles.chips, styles.section]}>
          {CATEGORIAS.map((categoria) => (
            <Chip key={categoria} compact>
              {categoria}
            </Chip>
          ))}
        </View>
        <View style={styles.list}>
          {MODULOS.map((item) => (
            <ModuloCard
              key={item.id}
              item={item}
              onPress={(modulo) =>
                navigation.navigate("Inicio", {
                  screen: "Details",
                  params: { item: modulo },
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginBottom: spacing.sm,
  },
  section: {
    marginBottom: spacing.md,
  },
  list: {
    gap: spacing.sm,
    paddingBottom: spacing.lg,
  },
});
