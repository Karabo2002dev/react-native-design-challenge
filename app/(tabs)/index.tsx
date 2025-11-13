import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons/Octicons';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Link } from "expo-router";

import Navbar from "../../components/Navbar";
import ProductDetail from "../../components/ProductDetail";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [loaded, error] = useFonts({
    "FamiljenGrotesk-Bold": require("../../assets/fonts/FamiljenGrotesk-Bold.otf"),
    "FamiljenGrotesk-Regular": require("../../assets/fonts/FamiljenGrotesk-Regular.otf"),
  });

  const [quantity, setQuantity] = useState<number>(2);

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleBuy = () => console.log("Buy Now clicked");

  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Navbar
        logo={require("../../assets/images/logo.png")}
        onBack={() => console.log("Go back")}
        onProfile={() => console.log("Open profile")}
        onCart={() => console.log("Cart pressed")}
        cartCount={1}
      />

      <View style={styles.imageContainer}>
        <View style={styles.imgcontainerNav}>
          <View style={styles.pillsTypeLinkContainer}>
            <Link href="/" style={styles.link}>
              <FontAwesome name="pagelines" size={16} color="black" style={{ marginRight: 8 }} />
              <Text style={styles.linkText}>Relax</Text>
            </Link>

            <Link href="/" style={styles.link}>
              <Octicons name="moon" size={16} color="black" style={{ marginRight: 8 }}/>
              <Text style={styles.linkText}>Sleep</Text>
            </Link>
          </View>

          <Pressable style={styles.doseButton}>
            <Text style={styles.doseText}>30</Text>
          </Pressable>
        </View>

        <Image
          source={require("../../assets/images/Background.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <ProductDetail
        title="Relax 30"
        subtitle="Dissolvable Wafers"
        dosage="250mg"
        price="$25.50"
        quantity={quantity}
        onIncrement={increment}
        onDecrement={decrement}
        onBuy={handleBuy}
      />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9C32B",
    flexGrow: 1,
    paddingTop: 32,
    alignItems: "center",
  },


  imageContainer: {
    width: "100%",
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    marginVertical: 24,
  },

  imgcontainerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  pillsTypeLinkContainer: {
    flexDirection: "row",
    flex: 1,
    gap: 32,
  },

  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  linkText: {
    fontFamily: "FamiljenGrotesk-Bold",
    fontSize: 16,
    color: "black",
  },

  doseButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  doseText: {
    color: "#F9C32B",
    fontFamily: "FamiljenGrotesk-Bold",
    fontSize: 16,
  },

  image: {
    width: 250,
    height: 250,
  },
});
