import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback>
          <View style={styles.flexContainerInputs}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <TextInput style={styles.input} placeholder="Пароль" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Pressable style={styles.buttonSubmit}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 19,
            color: "#FFFFFF",
            textAlign: "center",
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 111.5,
            paddingRight: 111.5,
          }}
        >
          Увійти
        </Text>
      </Pressable>
      <Text style={styles.logInText}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 111,
    paddingLeft: 16,
    paddingRight: 16,
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
});
