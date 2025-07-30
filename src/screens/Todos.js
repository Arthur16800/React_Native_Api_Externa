import api from "../services/api";
import { useState, useEffect } from "react";
import CardTodo from "../components/CardTodo";
import { View } from "react-native";
import Header from "../components/Header";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const todosData = (await api.getTodos()).data;
        const usersData = (await api.getUsers()).data;

        const todoName = todosData.map((todo) => {
          const user = usersData.find((u) => u.id === todo.userId);
          return {
            ...todo,
            userName: user ? user.name : "Usuário desconhecido",
          };
        });

        setTodos(todoName);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getTodos();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Página Todos" />
      <View>
        <CardTodo todos={todos} />
      </View>
    </View>
  );
}
