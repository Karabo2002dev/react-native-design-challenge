import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

interface CTAButtonProps {
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
  style?: ViewStyle;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  onPress,
  backgroundColor = "#F9C32B",
  style,
}) => {
  return (
    <Pressable style={[styles.button, { backgroundColor }, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontFamily: "FamiljenGrotesk-Bold",
    fontSize: 18,
    color: "black",
  },
});
