import { Tabs } from "expo-router";
import { TabList, TabTrigger } from "expo-router/ui";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#0a84ff' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tabs Home',
          tabBarLabel: 'Home',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
      <TabList>
        <TabTrigger name="index" />
        <TabTrigger name="profile" />
      </TabList>
    </Tabs>
  );
}
