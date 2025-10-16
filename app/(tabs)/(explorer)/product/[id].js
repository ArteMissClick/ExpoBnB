import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocationsStore } from "../../../../store/storeLocations";
import ConfirmationModal from "./(modal)/modal";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [showModal, setShowModal] = useState(false);
  const { locations } = useLocationsStore();

  const listingId = Array.isArray(id) ? id[0] : id;
  const listing = useMemo(
    () => locations.find((item) => String(item.id) === String(listingId)),
    [locations, listingId]
  );

  if (!listing) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.message}>Logement introuvable</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        {listing.image ? <Image source={{ uri: listing.image }} style={styles.image} /> : null}
        <View style={styles.box}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.line}>
            {listing.city} - {listing.price} EUR/nuit
          </Text>
          {listing.description ? <Text style={styles.text}>{listing.description}</Text> : null}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.total}>{listing.price} EUR / nuit</Text>
        <Pressable style={styles.button} onPress={() => setShowModal(true)}>
          <Text style={styles.buttonText}>Reserver</Text>
        </Pressable>
      </View>

      <ConfirmationModal visible={showModal} onClose={() => setShowModal(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 120,
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#ddd",
  },
  box: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  line: {
    color: "#555",
    marginBottom: 8,
  },
  text: {
    color: "#333",
    lineHeight: 20,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  total: {
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
  },
});
