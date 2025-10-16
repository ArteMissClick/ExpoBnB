import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count has changed:", count);
  }, [count]);

  const incremental = () => setCount(count + 1);
  const decremental = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect Demo</Text>
      <Text style={styles.content}>
        Ce compteur réagit à chaque changement grâce à useEffect.
      </Text>

      <View style={styles.row}>
        <Pressable style={styles.button} onPress={decremental}>
          <Text style={styles.buttonText}>Décrémenter</Text>
        </Pressable>

        <Text style={styles.countText}>{count}</Text>

        <Pressable style={styles.button} onPress={incremental}>
          <Text style={styles.buttonText}>Incrémenter</Text>
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Réinitialiser</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    width: "80%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  countText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});