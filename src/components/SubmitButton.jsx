import { Text, TouchableOpacity } from "react-native";

export const ButtonSubmit = ({ styles, title }) => {
  return (
    <TouchableOpacity style={styles.buttonSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
