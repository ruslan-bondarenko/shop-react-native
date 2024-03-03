import React from "react";
import {
  View,
  Text,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator"; // Подставьте правильный путь
import { globalStyles } from "../../styles";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const About: React.FC<Props> = ({ navigation }) => {
  const loadScene = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About page</Text>
      <Button title="Back" onPress={loadScene} />
    </View>
  );
};

export default About;
