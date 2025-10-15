import { Stack } from "expo-router";

export default function StackBasicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0a84ff" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Stack Home" }} />
      <Stack.Screen name="details" options={{ title: "Stack Details" }} />
    </Stack>
  );
}

