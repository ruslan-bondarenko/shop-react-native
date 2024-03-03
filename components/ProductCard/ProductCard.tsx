import React, { FC } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator";
import { IProduct } from "../../helpers";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  item: IProduct;
  navigation: HomeScreenNavigationProp;
};

export const ProductCard: FC<Props> = ({ navigation, item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Product", item)}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
        <View style={styles.main}>
          <View style={styles.top}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <Text style={styles.text}>{item.category.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 12,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  main: {
    gap: 4,
    padding: 16,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontFamily: "aeonik-bold",
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
