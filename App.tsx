import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import MainStack from "./Navigator";
import { Provider } from "react-redux";
import { store } from "./store";

const fonts = () =>
  Font.loadAsync({
    "aeonik-bold": require("./assets/fonts/Aeonik-Bold.otf"),
    "aeonik-bold-italic": require("./assets/fonts/Aeonik-BoldItalic.otf"),
    "aeonik-light": require("./assets/fonts/Aeonik-Light.otf"),
    "aeonik-light-italic": require("./assets/fonts/Aeonik-LightItalic.otf"),
    "aeonik-regular": require("./assets/fonts/Aeonik-Regular.otf"),
    "aeonik-regular-italic": require("./assets/fonts/Aeonik-RegularItalic.otf"),
  });

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);

  return (
    <Provider store={store}>
      {isFontsLoaded ? (
        <MainStack />
      ) : (
        <AppLoading
          startAsync={fonts}
          onFinish={() => setIsFontsLoaded(true)}
          onError={console.warn}
        />
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({});
