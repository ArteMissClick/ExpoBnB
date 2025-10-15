import { Stack } from "expo-router";

export default function SandboxLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="home"
        options={{ title: "Navigation Sandbox" }}
      />
      <Stack.Screen
        name="navigation"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
