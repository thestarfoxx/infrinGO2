import React from "react";
import { View, StyleSheet } from "react-native";
import TopRectangle from "../Components/TopRectangle";
import SettingItem from "../Components/SettingItem";
import Screen from "../Components/Screen";
import ProfileBox from "../Components/ProfileBox";
import colors from "../style/colors";


function SettingsScreen({ navigation }) {
  return (
    <Screen>
      <TopRectangle height={85} children="Settings" style1={styles.title} />

      <View style={styles.container}>
        <ProfileBox name="Makana" style={styles.profileBox} />
        <SettingItem
          icon="user"
          title="Account"
          onPress={() => navigation.navigate("SaleInputScreen")}
        />
        <SettingItem
          icon="user"
          title="Card Details"
          onPress={() => navigation.navigate("SaleInputScreen")}
        />
        

        <SettingItem
          icon="user"
          title="Help"
          onPress={() => navigation.navigate("HelpScreen")}
        />
        <SettingItem icon="user" title="Logout"  />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  title: {
    color: colors.TITLE,
    fontWeight: "bold",
    fontSize: 26,
  },
  profileBox: {
    top: -30,
  },
});

export default SettingsScreen;
