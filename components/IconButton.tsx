import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

interface IconButtonProps {
  onPress?: () => void;
  backgroundColor?: string;
  size?: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  backgroundColor = "white",
  size = 44,
  children,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor, width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
