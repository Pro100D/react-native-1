import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RegistrationInputs } from "../components/RegistrationInput";
import { ButtonSubmit } from "../components/SubmitButton";
import { UserImage } from "../components/ImageUser";

export default function RegistrationScreen() {
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    const values = {
      name,
      password,
      email,
    };
    console.log(values);
    setPassword("");
    setEmail("");
    setName("");
  };

  return (
    <View style={styles.container}>
      <UserImage styles={styles} />
      <Text style={styles.title}>Реєстрація</Text>

      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ paddingVertical: -8 }}
        >
          <TextInput
            onFocus={() => {
              setFocused("name");
            }}
            onBlur={() => {
              setFocused("");
            }}
            onChangeText={setName}
            value={name}
            name="name"
            style={[
              {
                marginVertical: 8,
                backgroundColor: "#F6F6F6",
                borderWidth: 1,
                borderColor: "#E8E8E8",
                borderRadius: 8,

                padding: 16,
              },
              focused === "name" && {
                borderColor: "#FF6C00",
                backgroundColor: "#FFFFFF",
              },
            ]}
            placeholder="Логін"
          />
          <RegistrationInputs
            focused={focused}
            setFocused={setFocused}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
          />

          <ButtonSubmit
            styles={styles}
            title={"Зареєстуватися"}
            onPress={onSubmit}
          />
        </KeyboardAvoidingView>
      </View>

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

  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 33,
  },

  buttonSubmit: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,

    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
    marginTop: 43,
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
