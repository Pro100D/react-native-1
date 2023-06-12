import { TextInput } from "react-native";

export const RegistrationInputs = ({
  focused,
  setFocused,
  password,
  setPassword,
  email,
  setEmail,
}) => {
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
        style={[
          {
            backgroundColor: "#F6F6F6",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: 8,
            marginVertical: 8,
            padding: 16,
          },
          focused === "email" && {
            borderColor: "#FF6C00",
            backgroundColor: "#FFFFFF",
          },
        ]}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={[
          {
            backgroundColor: "#F6F6F6",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: 8,
            marginVertical: 8,
            padding: 16,
          },
          focused === "password" && {
            borderColor: "#FF6C00",
            backgroundColor: "#FFFFFF",
          },
        ]}
        placeholder="Пароль"
        name="password"
        onFocus={() => {
          setFocused("password");
        }}
        onBlur={() => {
          setFocused("");
        }}
        onChangeText={setPassword}
        value={password}
      />
    </>
  );
};
