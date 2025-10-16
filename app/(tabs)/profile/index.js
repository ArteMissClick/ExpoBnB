import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../../store/user";

export default function ProfileScreen() {
  const { name, email, updateUser } = useUserStore();
  const [formName, setFormName] = useState(name);
  const [formEmail, setFormEmail] = useState(email);

  const handleSave = () => {
    if (!formName.trim() || !formEmail.trim()) {
      Alert.alert("Oups", "Remplis les deux champs");
      return;
    }
    updateUser(formName.trim(), formEmail.trim());
    Alert.alert("Ok", "Profil mis a jour");
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Mon profil</Text>
      <TextInput style={styles.input} value={formName} onChangeText={setFormName} placeholder="Nom" />
      <TextInput
        style={styles.input}
        value={formEmail}
        onChangeText={setFormEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.infoText}>Actuel: {name}</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  info: {
    marginTop: 16,
  },
  infoText: {
    marginBottom: 4,
  },
});
