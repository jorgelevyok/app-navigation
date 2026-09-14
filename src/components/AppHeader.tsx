import { Appbar } from "react-native-paper";

import { useNavigation } from "@/navigation/reactNavigation";

type Props = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
};

export function AppHeader({ title, subtitle, showBack = false }: Props) {
  const navigation = useNavigation();

  return (
    <Appbar.Header mode="small" elevated>
      {showBack ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  );
}
