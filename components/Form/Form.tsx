import { Formik } from "formik";
import React, { FC } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { IProduct } from "../../helpers";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/slices/productsSlice";
import { AppDispatch } from "../../store";

type Props = {};

export const Form: FC<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues: IProduct = {
    title: "",
    price: 1,
    description: "",
    images: [""],
  };
  // const initialValues: IProduct = {
  //   title: "Green",
  //   price: 199,
  //   description:
  //     "Use a light tent, that helps with the fairly even lighting, but with just enough to create a shadow and that adds to depth.",
  //   images: ["https://i.stack.imgur.com/CeCrU.jpg"],
  // };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, action) => {
          dispatch(createProduct(values));
          action.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              value={props.values.title}
              placeholder="Enter product title"
              onChangeText={props.handleChange("title")}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={String(props.values.price)}
              placeholder="Enter product price"
              onChangeText={props.handleChange("price")}
            />
            <TextInput
              style={styles.input}
              value={props.values.description}
              placeholder="Enter description"
              onChangeText={props.handleChange("description")}
            />
            <TextInput
              style={styles.input}
              value={props.values.images.join(",")}
              placeholder="Enter images"
              onChangeText={(text) => {
                props.setFieldValue("images", text.split(","));
              }}
            />

            <Button title="Send" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;

export const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 4,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
