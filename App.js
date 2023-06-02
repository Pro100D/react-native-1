import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./src/components/RegistrationScreen";
import LoginScreen from "./src/components/LoginScreen";
import bacgraundFoto from "./images/PhotoBG.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bacgraundFoto} style={styles.image}>
        <RegistrationScreen></RegistrationScreen>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
