import { TextInput } from "react-native";

export const RegistrationInputs = ({ focused, setFocused }) => {
  return (
    <>
      <TextInput
        onFocus={() => {
          setFocused("name");
        }}
        onBlur={() => {
          setFocused("");
        }}
        name="name"
        style={[
          {
            backgroundColor: "#F6F6F6",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: 8,

            padding: 16,
          },
          focused === "name" && { borderColor: "#FF6C00" },
        ]}
        placeholder="Логін"
      />
      <TextInput
        onFocus={() => {
          setFocused("email");
        }}
        onBlur={() => {
          setFocused("");
        }}
        name="email"
        style={[
          {
            backgroundColor: "#F6F6F6",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: 8,

            padding: 16,
          },
          focused === "email" && { borderColor: "#FF6C00" },
        ]}
        placeholder="Адреса електронної пошти"
      />
    </>
  );
};
