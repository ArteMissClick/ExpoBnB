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
        name="product/[id]"
        options={{
          title: "Détail du logement",
        }}
      />
    </Stack>
  );
}
