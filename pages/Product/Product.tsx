import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigator"; // Подставьте правильный путь
import { globalStyles } from "../../styles";
import { parseImages } from "../../helpers";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type PostScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  navigation?: HomeScreenNavigationProp;
  route: PostScreenRouteProp;
};

const Product: React.FC<Props> = ({ route }) => {
  const { title, images, price, category } = route.params;

  const mainImage = parseImages(images)[0];
  const otherImages = parseImages(images).slice(1);

  return (
    <View style={globalStyles.container}>
      <View style={styles.gallery}>
        <View>
          <Image
            style={styles.mainImage}
            source={{
              uri: mainImage,
            }}
          />
        </View>

        {!!otherImages && (
          <View style={styles.otherImagesContainer}>
            <FlatList
              data={otherImages}
              contentContainerStyle={{ gap: 8 }}
              horizontal
              renderItem={({ item }) => (
                <Image
                  style={styles.otherImage}
                  source={{
                    uri: item,
                  }}
                />
              )}
              keyExtractor={(item) => item}
            />
          </View>
        )}
      </View>

      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <Text style={styles.text}>{category?.name}</Text>
      </View>
      <Text>{route.params.description}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  gallery: {
    gap: 8,
  },
  mainImage: {
    aspectRatio: 1,
    width: "100%",
    borderRadius: 12,
  },
  otherImagesContainer: {
    flexDirection: "row",
  },
  otherImage: {
    aspectRatio: 1,
    width: 80,
    borderRadius: 8,
  },
  productDetails: {
    marginBottom: 12,
  },
  main: {
    gap: 4,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontFamily: "aeonik-bold",
    maxWidth: "80%",
  },
  text: {
    fontSize: 14,
    color: "#999",
  },
  price: {
    fontSize: 16,
    fontWeight: "900",
    color: "#050",
  },
});
