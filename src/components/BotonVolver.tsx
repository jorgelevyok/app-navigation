import { Button } from "react-native-paper";

import { useNavigation } from "@/navigation/reactNavigation";

type Props = {
  label?: string;
};

export function BotonVolver({ label = "Volver" }: Props) {
  const navigation = useNavigation();

  return (
    <Button
      mode="outlined"
      icon="arrow-left"
      onPress={() => navigation.goBack()}
    >
      {label}
    </Button>
  );
}
