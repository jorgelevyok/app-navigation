import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ExploreScreen from "@/screens/ExploreScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import { paperTheme } from "@/theme/paperTheme";
import { createBottomTabNavigator } from "@/navigation/reactNavigation";
import type { TabParamList } from "@/types/navigation";
import HomeStack from "@/navigation/HomeStack";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 64 + insets.bottom;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: paperTheme.colors.primary,
        tabBarInactiveTintColor: paperTheme.colors.onSurfaceVariant,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          backgroundColor: paperTheme.colors.elevation.level2,
          borderTopColor: paperTheme.colors.outlineVariant,
          borderTopWidth: 1,
          height: tabBarHeight,
          paddingTop: 8,
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
