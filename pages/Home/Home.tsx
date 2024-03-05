import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchProducts } from "../../store";

import { RootStackParamList } from "../../Navigator";
import { ProductCard, AddProductModal } from "../../components";
import type { IProduct } from "../../helpers";

import { globalStyles, loadingStyles, errorStyles } from "../../styles";
import { RefreshControl } from "react-native-gesture-handler";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={styles.top}>
        <Text style={globalStyles.title}>Products</Text>
        <Ionicons
          name="add"
          size={32}
          color="black"
          onPress={() => setIsModalOpen(true)}
        />
      </View>

      <AddProductModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {isLoading && (
        <View style={loadingStyles.container}>
          <ActivityIndicator size="large" />
          <Text style={loadingStyles.title}>Loading...</Text>
        </View>
      )}

      {!isLoading && data.length ? (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => dispatch(fetchProducts() as any)}
            />
          }
          contentContainerStyle={{ gap: 16 }}
          data={data}
          renderItem={({ item }: { item: IProduct }) => (
            <ProductCard navigation={navigation} item={item} />
          )}
        />
      ) : null}

      {!!error && (
        <View style={errorStyles.container}>
          <Text style={errorStyles.title}>{error}</Text>
        </View>
      )}
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
