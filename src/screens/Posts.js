import api from "../services/api";
import { useState, useEffect } from "react";
import CardPost from "../components/CardPost";
import { View } from "react-native";
import Header from "../components/Header";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData = (await api.getPosts()).data;
        const usersData = (await api.getUsers()).data;

        const postName = postsData.map((post) => {
          const user = usersData.find((u) => u.id === post.userId);
          return {
            ...post,
            userName: user ? user.name : "Usuário desconhecido",
          };
        });

        setPosts(postName);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Página Todos" />
      <View>
        <CardPost posts={posts} />
      </View>
    </View>
  );
}
