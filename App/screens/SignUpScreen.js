import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Screen from "../Components/Screen";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import { Formik } from "formik";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import * as Yup from "yup";
import IconText from "../Components/IconText";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),

  username: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
  confirm: Yup.string().required().min(4).label("Confirm Password"),
});


const SignUp = (({ navigation }) => {
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("LoginScreen")}>
        <FontAwesome
          name="angle-left"
          size={30}
          color={colors.GREY}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/login.jpg")}
        />
        <AppText style={styles.login}>Company Sign Up</AppText>
        <Formik
          initialValues={{ email: "", password: "", username: "", confirm: "" }}
          onSubmit={(values) => {navigation.navigate("LoginScreen")}}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                placeholder="Company Name:"
                onChangeText={handleChange("username")}
                onBlur={() => setFieldTouched("username")}
              />
              {touched.username && (
                <AppText style={{ color: "red" }}>{errors.username}</AppText>
              )}
              <AppTextInput
                placeholder="Company Email:"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && (
                <AppText style={{ color: "red" }}>{errors.email}</AppText>
              )}
              <AppTextInput
                placeholder="Password:"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry
              />
              {touched.password && (
                <AppText style={{ color: "red" }}>{errors.password}</AppText>
              )}
              <AppTextInput
                placeholder="Confirm Password:"
                onChangeText={handleChange("confirm")}
                onBlur={() => setFieldTouched("confirm")}
                secureTextEntry
              />
              {touched.confirm && (
                <AppText style={{ color: "red" }}>{errors.confirm}</AppText>
              )}
              <View style={{right:50}}>

                <IconText icon={"file"} text="Add Documents" />
              </View>
              <View style={{ marginTop: 10 }}>
                <AppButton title="Sign-Up" onPress={handleSubmit} width={140} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  image: {
    width: "67%",
    height: "26%",
    marginBottom: 18,
  },

  icon: { left: 20, top: 10 },
  login: {
    alignSelf: "flex-start",
    fontSize: 30,
    left: 55,
    color: colors.TITLE,
    fontWeight: "bold",
    marginBottom: 10,
  },
  forget: {
    alignSelf: "flex-end",
    right: 30,
    margin: 5,
    color: colors.SOFTBLACK,
    fontSize: 14,
  },
  text1: {
    left: -8,
    fontSize: 14,
    top: 2,
  },
  signup: {
    color: colors.TITLE,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUp;
