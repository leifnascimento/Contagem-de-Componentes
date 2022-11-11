import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Montagem de Componentes:");
  }, []);
  useEffect(() => {
    console.log("Contagem de Atualização:");
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Incremento contagem" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
