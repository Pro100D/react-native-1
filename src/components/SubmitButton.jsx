import { Text, TouchableOpacity } from "react-native";

export const ButtonSubmit = ({ styles, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonSubmit} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
