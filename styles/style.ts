import { StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
 title: {
  fontFamily: 'aeonik-regular',
  fontSize: 22,
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

export const modalStyles = StyleSheet.create({
 modal: {
 },
 close: {
  position: 'absolute',
  top: 64,
  right: 16,
  paddingLeft: 2,
  borderRadius: 8,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
  zIndex: 2
 },
 container: {
  paddingHorizontal: 16,
  paddingTop: 16,
  gap: 16,
 },
 title: {
  fontSize: 22,
  fontWeight: "700",
 },
});

export const loadingStyles = StyleSheet.create({
 container: {
  flex: 1,
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
 },
 title: {
  fontSize: 20,
  fontWeight: "500"
 }
});

export const errorStyles = StyleSheet.create({
 container: {
  alignItems: 'center',
  justifyContent: 'center',
 },
 title: {
  fontSize: 20,
  fontWeight: "500",
  color: '#880808',
 }
});


export const headerStyles = {
 headerStyle: { height: 100, backgroundColor: "#ded" },
 headerTitleStyle: { color: "#474747", fontSize: 18 },
}