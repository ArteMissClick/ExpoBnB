import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import data from "../../../../mockData";
import ConfirmationModal from "./(modal)/modal";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const numericId = useMemo(() => {
    const rawId = Array.isArray(id) ? id[0] : id;
    const parsed = Number(rawId);
    return Number.isFinite(parsed) ? parsed : null;
  }, [id]);

  const listing = useMemo(
    () => data.find((item) => item.id === numericId),
    [numericId]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {listing.image ? (
          <Image source={{ uri: listing.image }} style={styles.heroImage} />
        ) : null}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subtitle}>
            {listing.city} • {listing.price} €/nuit
          </Text>
          {listing.description ? (
            <Text style={styles.description}>{listing.description}</Text>
          ) : null}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerPrice}>{listing.price} € / nuit</Text>
          <Text style={styles.footerCaption}>Taxes et frais inclus</Text>
        </View>
        <Pressable
          style={styles.bookButton}
          onPress={() => setIsConfirmationVisible(true)}
        >
          <Text style={styles.bookButtonText}>Réserver</Text>
        </Pressable>
      </View>

      <ConfirmationModal
        visible={isConfirmationVisible}
        onClose={() => setIsConfirmationVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingBottom: 160,
  },
  heroImage: {
    width: "100%",
    height: 260,
  },
  detailsContainer: {
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
  },
  description: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#ffffffee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  footerCaption: {
    fontSize: 12,
    color: "#6b7280",
  },
  bookButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
