import { Stack } from "expo-router";

export default function ExplorerLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "ExpoBnB",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="(modals)"
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
