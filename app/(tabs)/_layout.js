import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0a84ff",
      }}
    >
      <Tabs.Screen
        name="(explorer)"
        options={{
          title: "Explorer",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 16 }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 16 }}>👤</Text>
          ),
        }}
      />
    </Tabs>
  );
}
