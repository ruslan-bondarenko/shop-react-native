import React from "react";
import { Home, About, Product } from "./pages";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import type { IProduct } from "./helpers";
import { headerStyles } from "./styles";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Product: IProduct;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home page",
            ...headerStyles,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About page",
            ...headerStyles,
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: "About product", ...headerStyles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
