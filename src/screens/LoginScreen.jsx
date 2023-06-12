import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RegistrationInputs } from "../components/RegistrationInput";
import { ButtonSubmit } from "../components/SubmitButton";
import { useState } from "react";

export default function LoginScreen() {
  const [focused, setFocused] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    const values = {
      password,
      email,
    };
    console.log(values);
    setPassword("");
    setEmail("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback>
          <View style={styles.flexContainerInputs}>
            <RegistrationInputs
              styles={styles}
              focused={focused}
              setFocused={setFocused}
              password={password}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ButtonSubmit styles={styles} title={"Увійти"} onPress={onSubmit} />
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
