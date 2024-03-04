import React, { FC } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import { RootStackParamList } from "../../Navigator";

import { IProduct, parseImages } from "../../helpers";
import { deleteProduct } from "../../store/slices/productsSlice";
import { AppDispatch } from "../../store";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  item: IProduct;
  navigation: HomeScreenNavigationProp;
};

export const ProductCard: FC<Props> = ({ navigation, item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAlertDelete = () =>
    Alert.alert("Are u sure?", `u will delete product with id: ${item.id}`, [
      { text: "Yes", onPress: () => dispatch(deleteProduct(item?.id || "")) },
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Product", item)}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: parseImages(item.images)[0] || "https://placehold.co/500x500",
          }}
        />
        <View style={styles.deleteIcon}>
          <TouchableWithoutFeedback onPress={() => handleAlertDelete()}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.main}>
          <View style={styles.top}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <Text style={styles.text}>{item?.category?.name || ""}</Text>
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
  deleteIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 8,
  },
});
