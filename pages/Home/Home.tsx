import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator";
import { globalStyles } from "../../styles";
import { IProduct } from "../../helpers";
import { ProductCard } from "../../components";
// import { Entypo } from "@expo/vector-icons";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
        ).then((res) => res.json());
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={styles.top}>
        <Text style={globalStyles.title}>Products</Text>
        {/* <Entypo name="plus" size={24} color="black" /> */}
      </View>

      {products.length ? (
        <FlatList
          contentContainerStyle={{ gap: 16 }}
          data={products}
          renderItem={({ item }: { item: IProduct }) => (
            <ProductCard navigation={navigation} item={item} />
          )}
        />
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
