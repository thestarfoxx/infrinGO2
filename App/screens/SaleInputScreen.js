import React from "react";
import { View, StyleSheet, Alert,Image } from "react-native";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import FormInput from "../Components/FormInput";
import AppButton from "../Components/AppButton";
import IconText from "../Components/IconText";

function SaleInputScreen({ navigation }) {
  return (
    <Screen>
      <TopRectangle
        width={100}
        style1={styles.title}
       
      />
      <Image source={require("../../assets/sale.jpg")} style={styles.image} />
      <View style={styles.container}>
        {/* <View style={styles.whiteBox}>
          <AppText style={styles.addInfo}>
            Add Your Sale 
          </AppText>
        </View> */}

        <View style={styles.inputs}>
          <FormInput title="Add Your Sale Label:" width={280} height={90} />
         </View>
        <View style={styles.row2}>
          <View style={styles.iconText}>
            <IconText icon={"file-image-o"} text="Add a picture (optional)" />
            <IconText icon={"calendar"} text="Choose Date" />
          </View>
        </View>
          <AppButton
            width={85}
            height={60}
            title="Submit"
            color={colors.DARKGREEN}
            titleColor={colors.WHITE}
            onPress={() => Alert.alert("Sale Added")}
          />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    alignItems:"center"
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
    bottom:60,
    marginBottom: 10,
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
  image: {
    alignSelf:"center",
    width: "70%",
    height: "25%",
    bottom:90,


  },
  year: {
    marginRight: 80,
  },
  greenBoxText: {},
  row1: {
    flexDirection: "row",
  },
});

export default SaleInputScreen;
