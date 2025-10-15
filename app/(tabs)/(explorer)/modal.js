import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import data from "../../../mockData";

export default function Modal() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const numericId = Array.isArray(id) ? Number(id[0]) : Number(id);
  const listing = data.find((item) => item.id === numericId);

  return (
    <View style={styles.container}>
      {listing.image ? (
        <Image source={{ uri: listing.image }} style={styles.image} />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subtitle}>
          {listing.city} • {listing.price} €/nuit
        </Text>
        {listing.description ? (
          <Text style={styles.description}>{listing.description}</Text>
        ) : null}
      </View>
      <Pressable style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Fermer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  content: {
    padding: 24,
    gap: 12,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  description: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
  closeButton: {
    margin: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#2563eb",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
  },
});
