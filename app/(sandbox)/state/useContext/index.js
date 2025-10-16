import { createContext, useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ThemeContext = createContext();

function themeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);
const ThemeProvider = themeProvider;

function ThemeDemoContent() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        isDark ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text style={[styles.title, isDark ? styles.darkText : styles.lightText]}>
        Thème : {theme}
      </Text>
      <Pressable onPress={toggleTheme} style={styles.button}>
        <Text style={styles.buttonText}>
          Passer en mode {isDark ? "clair" : "sombre"}
        </Text>
      </Pressable>
    </View>
  );
}

export default function UseContext() {
  return (
    <ThemeProvider>
      <ThemeDemoContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  lightContainer: {
    backgroundColor: "#f3f4f6",
  },
  darkContainer: {
    backgroundColor: "#111827",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 24,
  },
  lightText: {
    color: "#111827",
  },
  darkText: {
    color: "#f9fafb",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
