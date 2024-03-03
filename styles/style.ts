import { StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
 title: {
  fontFamily: 'aeonik-regular',
  fontSize: 20,
  textAlign: 'center',
 },
 container: {
  flex: 1,
  gap: 16,
  paddingVertical: 24,
  paddingHorizontal: 16,
  backgroundColor: '#efefef'
 },
});

export const headerStyles = {
 headerStyle: { height: 100, backgroundColor: "#ded" },
 headerTitleStyle: { color: "#474747", fontSize: 18 },
}