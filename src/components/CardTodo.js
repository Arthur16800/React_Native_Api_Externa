import { View, Text, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState, useEffect } from "react";

export default function CardTodo({ todos }) {
  const [checkedTodos, setCheckedTodos] = useState({});

  useEffect(() => {
    const initialChecked = {};
    todos.forEach((todo) => {
      initialChecked[todo.id] = todo.completed;
    });
    setCheckedTodos(initialChecked);
  }, [todos]);

  function toggleCheck(id) {
    setCheckedTodos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PÁGINA TODOS</Text>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.card}>
          <Text style={styles.name}>{todo.title}</Text>

          <View style={styles.row}>
            <Checkbox
              style={styles.checkbox}
              value={checkedTodos[todo.id] || false}
              onValueChange={() => toggleCheck(todo.id)}
              color={checkedTodos[todo.id] ? "#4630EB" : undefined}
            />
            <Text style={styles.checkboxLabel}>
              {checkedTodos[todo.id] ? "Completo" : "Pendente"}
            </Text>
          </View>

          <Text>Autor: {todo.userName}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});
