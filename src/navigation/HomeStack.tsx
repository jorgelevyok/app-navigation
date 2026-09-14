import HomeScreen from "@/screens/HomeScreen";
import DetailsScreen from "@/screens/DetailsScreen";
import { createNativeStackNavigator } from "@/navigation/reactNavigation";
import type { HomeStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
