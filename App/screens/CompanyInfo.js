import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import FormInput from "../Components/FormInput";
import AppButton from "../Components/AppButton";
import IconText from "../Components/IconText";

function CompanyInfo({ navigation }) {
  return (
    <Screen>
      <TopRectangle
        width={100}
        children="Company Info"
        style1={styles.title}
     
      />
      <View style={styles.container}>
        <View style={styles.whiteBox}>
          <AppText style={styles.addInfo}>
            Add & Edit information about your company
          </AppText>
        </View>

       
        <View style={styles.inputs}>
          <FormInput title="About the company:" width={250} height={100} />
         
        </View>
        <View style={styles.row2}>
          <View style={styles.iconText}>
            <IconText icon={"file-image-o"} text="Add Pictures" />
            <IconText icon={"map-marker"} text="Select your location" />
          </View>
          <AppButton
            width={85}
            height={60}
            title="Submit"
            color={colors.DARKGREEN}
            titleColor={colors.WHITE}
            onPress={() => Alert.alert("Changes Added")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
  },
  row2: {
    flexDirection: "row",
    marginTop: 20,
  },
  iconText: {
    marginRight: 40,
  },
  inputs: {},
  whiteBox: {
    width: "89%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 15,
    marginVertical: 10,
    marginBottom: 30,
    alignSelf: "center",
  },
  addInfo: {
    color: colors.LIGHTBLACK,
  },
  greenBox: {
    width: "80%",
    padding: 10,
    height: 70,
    backgroundColor: colors.BACKGROUND,
    elevation: 15,
    marginVertical: 5,
  },
  year: {
    marginRight: 80,
  },
  greenBoxText: {},
  row1: {
    flexDirection: "row",
  },
});

export default CompanyInfo;
