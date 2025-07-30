import api from "../services/api";
import { useState, useEffect } from "react";
import CardUser from "../components/CardUser";
import { View } from "react-native";
import Header from "../components/Header"; // Importando o Header

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Página Users" />
      <View style={{ flex: 1 }}>
        <CardUser users={users} />
      </View>
    </View>
  );
}
