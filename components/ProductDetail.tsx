import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Counter from "./Counter";
import CTAButton from "./CTAButton";

interface ProductDetailProps {
  title: string;
  subtitle: string;
  dosage: string;
  price: string;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onBuy: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  subtitle,
  dosage,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onBuy,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{subtitle}</Text>
      <Text style={styles.subText}>{dosage}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <Counter value={quantity} />
      </View>

      <CTAButton label="Buy Now" onPress={onBuy} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    padding: 32,
    gap: 8,
  },
  title: { fontFamily: "FamiljenGrotesk-Bold", fontSize: 24 },
  subText: { fontFamily: "FamiljenGrotesk-Regular", fontSize: 16, color: "gray" },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  price: { fontFamily: "FamiljenGrotesk-Bold", fontSize: 24 },
});
