import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTogglePasswordVisibility } from "./hooks/useTogglePasswordVisibility";

export const RegistrationInputs = ({
  focused,
  setFocused,
  password,
  setPassword,
  email,
  setEmail,
}) => {
  const { passwordVisibility, textOnChangePass, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <>
      <TextInput
        onFocus={() => {
          setFocused("email");
        }}
        onBlur={() => {
          setFocused("");
        }}
        onChangeText={setEmail}
        value={email}
        name="email"
        style={
          focused === "email"
            ? { ...styles.inputs, ...styles.inputsOnFocus }
            : styles.inputs
        }
        placeholder="Адреса електронної пошти"
      />

      <View>
        <TextInput
          style={
            focused === "password"
              ? { ...styles.inputs, ...styles.inputsOnFocus }
              : styles.inputs
          }
          placeholder="Пароль"
          name="password"
          secureTextEntry={passwordVisibility}
          onFocus={() => {
            setFocused("password");
          }}
          onBlur={() => {
            setFocused("");
          }}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          style={{
            position: "absolute",
            top: 22,
            right: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 19,

              color: "#1B4371",
            }}
          >
            {textOnChangePass}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputs: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginVertical: 8,
    padding: 16,
    height: 50,
  },

  inputsOnFocus: { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },
});
