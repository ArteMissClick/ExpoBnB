import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  clearTasks: () =>
    set({
      tasks: [],
    }),
}));

export default function StoreSandbox() {
  const [taskTitle, setTaskTitle] = useState("");
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const clearTasks = useTaskStore((state) => state.clearTasks);
  const trimmedTitle = taskTitle.trim();
  const isAddDisabled = trimmedTitle.length === 0;

  const getAddButtonStyles = (pressed, disabled) => [
    styles.button,
    pressed && styles.buttonPressed,
    disabled && styles.buttonDisabled,
  ];

  const handleAddTask = () => {
    if (isAddDisabled) {
      return;
    }
    const randomId = Math.floor(1000 + Math.random() * 9000);
    addTask({ id: randomId, title: trimmedTitle });
    setTaskTitle("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Liste de tâches (Zustand)</Text>

        <TextInput
          style={styles.input}
          placeholder="Ajouter une tâche"
          value={taskTitle}
          onChangeText={setTaskTitle}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => getAddButtonStyles(pressed, isAddDisabled)}
            onPress={handleAddTask}
            disabled={isAddDisabled}
          >
            <Text style={styles.addButtonText}>Ajouter</Text>
          </Pressable>
          <Pressable style={styles.buttonDanger} onPress={clearTasks}>
            <Text style={styles.clearButtonText}>Effacer toutes les tâches</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={tasks.length === 0 && styles.emptyStateContainer}
          ListEmptyComponent={<Text style={styles.emptyText}>Aucune tâche pour le moment.</Text>}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#0f172a",
    backgroundColor: "#fff",
    maxHeight: 60,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonDanger: {
    backgroundColor: "#dc2626",
    borderRadius: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyStateContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyText: { color: "#94a3b8" },
  taskItem: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#e0f2fe",
    marginBottom: 10,
  },
  taskText: { fontSize: 15, color: "#0f172a" },
});
