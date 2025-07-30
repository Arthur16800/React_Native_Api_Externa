import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function CardUser({users}) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PÁGINA USERS</Text>
      {users.map((user) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.address?.city}</Text>
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
