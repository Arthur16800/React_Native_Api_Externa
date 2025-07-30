import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function CardPost({posts}) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PÁGINA POSTS</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.name}>{post.title}</Text>
          <Text>{post.body}</Text>
          <Text>Autor: {post.userName}</Text>
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
});
