import { useState } from "react";
import { TextInput } from "react-native";

export const RegistrationInputs = ({ styles }) => {
  const [focusedName, setFocusedName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  return (
    <>
      <TextInput
        onFocus={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "name") {
            setFocusedName(true);
          }
        }}
        onBlur={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "name") {
            setFocusedName(false);
          }
        }}
        name="name"
        style={focusedName ? styles.inputOnFocus : styles.inputOnBlur}
        placeholder="Логін"
      />
      <TextInput
        onFocus={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "email") {
            setFocusedEmail(true);
          }
        }}
        onBlur={(e) => {
          if (e._dispatchInstances.memoizedProps.name === "email") {
            setFocusedEmail(false);
          }
        }}
        name="email"
        style={focusedEmail ? styles.inputOnFocus : styles.inputOnBlur}
        placeholder="Адреса електронної пошти"
      />
    </>
  );
};
