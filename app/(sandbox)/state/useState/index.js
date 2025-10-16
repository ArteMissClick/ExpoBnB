import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function UseState() {
  const [count, setCount] = useState(0);

  const incremental = () => {
    console.log("Count after direct setCount:", count);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    console.log("Count after direct setCount:", count + 1);
    
  };

  const decremental = () => {
    console.log("Count before setCount:", count);
    setCount(count => count - 1);
    console.log("Count after setCount:", count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState Demo</Text>
      <Text style={styles.content}>
        This is a simple demonstration of the useState hook in React Native.
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20}}>
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
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  countText: {
    marginTop: 24,
    fontSize: 40,
    fontWeight: "600",
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
