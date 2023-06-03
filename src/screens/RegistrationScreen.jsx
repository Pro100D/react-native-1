import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RegistrationInputs } from "../components/registrationInputs";
import { ButtonSubmit } from "../components/buttonSubmit";
import { UserImage } from "../components/userImage";

export default function RegistrationScreen() {
  const [focusedPassword, setFocusedPassword] = useState(false);

  return (
    <View style={styles.container}>
      <UserImage styles={styles} />
      <Text style={styles.title}>Реєстрація</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback>
          <View style={styles.flexContainerInputs}>
            <RegistrationInputs styles={styles} />
            <TextInput
              style={focusedPassword ? styles.inputOnFocus : styles.inputOnBlur}
              placeholder="Пароль"
              name="password"
              onFocus={(e) => {
                if (e._dispatchInstances.memoizedProps.name === "password") {
                  setFocusedPassword(true);
                }
              }}
              onBlur={(e) => {
                if (e._dispatchInstances.memoizedProps.name === "password") {
                  setFocusedPassword(false);
                }
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ButtonSubmit styles={styles} title={"Зареєстуватися"} />
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
  icon: {
    position: "absolute",
    bottom: 14,
    left: 107,
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
  inputOnBlur: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    padding: 16,
  },
  inputOnFocus: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,

    padding: 16,

    borderColor: "#FF6C00",
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
