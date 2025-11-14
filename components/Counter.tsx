import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} >
        <FontAwesome name="minus-square-o" size={20} color="#F9C32B" />
      </Pressable>
      <Text style={styles.text}>{value}</Text>
      <Pressable style={styles.button}>
        <FontAwesome name="plus-square-o" size={20} color="#F9C32B" />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", gap: 16 },
  button : {backgroundColor: "black", padding: 4, borderRadius : "25%", justifyContent: "center", alignItems: "center"},
  text: { fontSize: 20, fontFamily: "FamiljenGrotesk-Bold" },
});
