import React, { FC } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";
import { modalStyles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { Form } from "../../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (a: boolean) => void;
};

export const AddProductModal: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal visible={isModalOpen}>
      <SafeAreaView style={modalStyles.modal}>
        <View style={modalStyles.close}>
          <Ionicons
            name="close-sharp"
            size={32}
            color="black"
            onPress={() => setIsModalOpen(false)}
          />
        </View>

        <View style={modalStyles.container}>
          <Text style={modalStyles.title}>Add Product</Text>
          <Form />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddProductModal;
