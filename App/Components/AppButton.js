import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../style/colors";

function AppButton({
  title,
  onPress,
  color = colors.BACKGROUND,
  titleColor,
  width = 100,
  height = 45,
  icon,
  style,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width, height }, style]}
      onPress={onPress}
      {...otherProps}
    >
      <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
      {icon ? (
        <FontAwesome
          name={icon}
          color={"white"}
          size={26}
          style={styles.icon}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",

    margin: 5,
    elevation: 20,
  },
  text: {
    color: colors.DARKGREEN,
    fontSize: 12,

    fontWeight: "bold",
  },
  icon: { left: 17 },
});

export default AppButton;
