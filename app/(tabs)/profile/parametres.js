import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Parametres</Text>
      <Text style={styles.text}>Ici tu pourras regler ton compte plus tard.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  text: {
    color: "#555",
    textAlign: "center",
  },
});
