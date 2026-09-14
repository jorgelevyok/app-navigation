import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Chip, Text } from "react-native-paper";

import { AppHeader } from "@/components/AppHeader";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { type BottomTabScreenProps } from "@/navigation/reactNavigation";
import { sharedStyles, spacing } from "@/theme/sharedStyles";
import type { TabParamList } from "@/types/navigation";

type Props = BottomTabScreenProps<TabParamList, "Perfil">;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <ScreenWrapper>
      <AppHeader title="Perfil" />
      <ScrollView contentContainerStyle={sharedStyles.content}>
        <Card mode="elevated" style={styles.card}>
          <Card.Content style={styles.profile}>
            <Avatar.Text size={72} label="JL" />
            <View style={styles.info}>
              <Text variant="titleLarge">Estudiante UTN</Text>
              <Text variant="bodyMedium">Actividad 2 · Navegación</Text>
            </View>
          </Card.Content>
        </Card>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Conceptos aplicados
        </Text>
        <View style={sharedStyles.chips}>
          <Chip icon="layers-outline">Stack</Chip>
          <Chip icon="tab">Tabs</Chip>
          <Chip icon="package-variant">route.params</Chip>
          <Chip icon="palette-outline">Material 3</Chip>
        </View>

        <Card mode="contained" style={styles.note}>
          <Card.Content>
            <Text variant="titleSmall">navigation.replace</Text>
            <Text variant="bodyMedium">
              replace cambia la pantalla actual en lugar de apilar otra. Se usa
              en login para que el usuario no vuelva al formulario con el botón
              atrás. Esta app no tiene auth, así que se deja documentado.
            </Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained-tonal"
          icon="home-outline"
          onPress={() => navigation.navigate("Inicio", { screen: "Home" })}
        >
          Ir a Inicio
        </Button>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  sectionTitle: {
    marginBottom: spacing.sm,
  },
  note: {
    marginVertical: spacing.md,
  },
});
