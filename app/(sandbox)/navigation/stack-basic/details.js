import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StackDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation Details</Text>
      <Pressable
        onPress={() => router.back()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
      <Link href="/(sandbox)/home" style={styles.link}>
        <Text style={styles.linkText}>Back to Sandbox Home</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
});