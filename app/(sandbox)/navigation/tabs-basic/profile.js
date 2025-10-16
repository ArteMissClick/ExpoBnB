import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ExpoBnB!</Text>
      <Text style={styles.subtitle}>Your adventure starts here.</Text>
      <Link href="/(sandbox)/home" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>
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