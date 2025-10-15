import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ExpoBnB!</Text>
      <Text style={styles.subtitle}>Your adventure starts here.</Text>
      <Pressable
        onPress={() => router.push("/(sandbox)/navigation/drawer-basic")}
        style={styles.link}
      >
        <Text style={styles.linkText}>drawer-basic</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(sandbox)/navigation/modal-basic")}
        style={styles.link}
      >
        <Text style={styles.linkText}>modal-basic</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(sandbox)/navigation/stack-basic")}
        style={styles.link}
      >
        <Text style={styles.linkText}>stack-basic</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(sandbox)/navigation/tabs-basic")}
        style={styles.link}
      >
        <Text style={styles.linkText}>tabs-basic</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  link: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
  },
});     
