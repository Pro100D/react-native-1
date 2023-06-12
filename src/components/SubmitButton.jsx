import { Text, TouchableOpacity } from "react-native";

export const ButtonSubmit = ({
  styles: { buttonSubmit, buttonText },
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={buttonSubmit} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
