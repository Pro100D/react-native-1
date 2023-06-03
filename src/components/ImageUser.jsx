import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import bacgraundFon from "../../images/Rectangle22.png";

export const UserImage = ({ styles }) => {
  return (
    <View style={styles.img}>
      <Image source={bacgraundFon} />
      <TouchableOpacity>
        <Ionicons
          name="ios-add-circle-outline"
          size={25}
          color="#FF6C00"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
