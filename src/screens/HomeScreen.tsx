import { FlatList } from "react-native";
import { FAB, Text } from "react-native-paper";

import { AppHeader } from "@/components/AppHeader";
import { ModuloCard } from "@/components/ModuloCard";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { MODULOS } from "@/data/modulos";
import {
  type CompositeScreenProps,
  type NativeStackScreenProps,
  type BottomTabScreenProps,
} from "@/navigation/reactNavigation";
import { sharedStyles } from "@/theme/sharedStyles";
import type { HomeStackParamList, TabParamList } from "@/types/navigation";

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, "Home">,
  BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScreenWrapper>
      <AppHeader title="Módulos" subtitle="Tocá una card para abrir el detalle" />
      <FlatList
        data={MODULOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={sharedStyles.listContent}
        ListHeaderComponent={
          <Text variant="bodyMedium" style={sharedStyles.section}>
            Lista enviada con navigation.navigate('Details', {"{ item }"}).
          </Text>
        }
        renderItem={({ item }) => (
          <ModuloCard
            item={item}
            onPress={(modulo) => navigation.navigate("Details", { item: modulo })}
          />
        )}
      />
      <FAB
        icon="compass-outline"
        label="Explorar"
        style={sharedStyles.fab}
        onPress={() => navigation.navigate("Explorar")}
      />
    </ScreenWrapper>
  );
}
