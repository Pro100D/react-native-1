import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import bacgraundFon from "../../images/Rectangle22.png";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Image source={bacgraundFon} style={styles.img}></Image>
      <Text style={styles.title}>Реєстрація</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.flexContainerInputs}>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.buttonSubmit} title="Зареєстуватися">
        <Text style={styles.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={styles.logInText}>Вже є акаунт? Увійти</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,

    position: "relative",
  },
  flexContainerInputs: {
    gap: 16,

    marginBottom: 43,
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    padding: 16,
  },
  buttonSubmit: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,

    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
  },
  logInText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  img: {
    position: "absolute",
    top: -60,
    right: 136,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 111.5,
    paddingRight: 111.5,
  },
});
