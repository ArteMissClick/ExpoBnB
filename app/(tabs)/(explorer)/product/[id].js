import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import data from "../../../../mockData";

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

  if (!listing) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Logement introuvable</Text>
          <Text style={styles.emptySubtitle}>
            Le logement que vous recherchez n&apos;est plus disponible.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

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

      <Modal
        animationType="fade"
        transparent
        visible={isConfirmationVisible}
        onRequestClose={() => setIsConfirmationVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Réservation confirmée</Text>
            <Text style={styles.modalMessage}>
              Merci ! Nous vous avons envoyé un e-mail de confirmation.
            </Text>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setIsConfirmationVisible(false)}
            >
              <Text style={styles.modalCloseText}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 24,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  modalMessage: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    backgroundColor: "#2563eb",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalCloseText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  emptySubtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
    textAlign: "center",
  },
});
