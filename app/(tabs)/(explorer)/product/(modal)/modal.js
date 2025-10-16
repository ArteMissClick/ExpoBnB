import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function ConfirmationModal({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Réservation confirmée</Text>
          <Text style={styles.modalMessage}>
            Merci ! Nous vous avons envoyé un e-mail de confirmation.
          </Text>
          <Pressable style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.modalCloseText}>Fermer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});
