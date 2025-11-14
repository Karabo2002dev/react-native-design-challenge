// components/Navbar.tsx
import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type NavbarProps = {
  logo: any;
  onBack?: () => void;
  onProfile?: () => void;
  onCart?: () => void;
  cartCount?: number; 
};

const Navbar: React.FC<NavbarProps> = ({
  logo,
  onBack,
  onProfile,
  onCart,
  cartCount = 0,
}) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.leftContainer}>
        <Pressable style={styles.iconButton} onPress={onBack}>
          <FontAwesome size={18} color="black" name="angle-left" />
        </Pressable>

        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.rightContainer}>
        <Pressable style={[styles.iconButton, styles.profileButton]} onPress={onProfile}>
          <FontAwesome size={18} color="white" name="user-o" />
        </Pressable>

        <View>
          <Pressable style={styles.iconButton} onPress={onCart}>
            <FontAwesome size={18} color="black" name="shopping-basket" />
          </Pressable>

          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButton: {
    backgroundColor: "#ac851aa8",
  },
  logo: {
    width: 90,
    height: 90,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "black",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontFamily: "FamiljenGrotesk-Bold",
  },
});
