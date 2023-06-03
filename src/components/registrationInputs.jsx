import { useState } from "react";
import { TextInput } from "react-native";

export const RegistrationInputs = ({ styles, focused, setFocused }) => {
  return (
    <>
      <TextInput
        onFocus={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "name") {
            setFocused("name");
          }
        }}
        onBlur={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "name") {
            setFocused("");
          }
        }}
        name="name"
        style={focused === "name" ? styles.inputOnFocus : styles.inputOnBlur}
        placeholder="Логін"
      />
      <TextInput
        onFocus={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "email") {
            setFocused("email");
          }
        }}
        onBlur={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "email") {
            setFocused("");
          }
        }}
        name="email"
        style={focused === "email" ? styles.inputOnFocus : styles.inputOnBlur}
        placeholder="Адреса електронної пошти"
      />
    </>
  );
};
