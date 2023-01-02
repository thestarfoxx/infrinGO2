import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Screen from "../Components/Screen";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import { Formik } from "formik";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import * as Yup from "yup";
import Line from "../Components/Line";
import Icon from "../Components/Icon";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});


const Login = (({ navigation }) => {
  return (
    <Screen>
      <FontAwesome
        name="angle-left"
        size={30}
        color={colors.GREY}
        style={styles.icon}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/login.jpg")}
        />
        <AppText style={styles.login}>Login</AppText>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={(values) => navigation.navigate("CompanyScreen")}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            touched,
            errors,
            setFieldTouched,
          }) => (
            <>
              <AppTextInput
                placeholder="Company Name"
                
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && (
                <AppText style={{ color: "red" }}>{errors.name}</AppText>
              )}
              <AppTextInput
                placeholder="Password:"
                onChangeText={handleChange("password")}
                secureTextEntry
              />
              {touched.password && (
                <AppText style={{ color: "red" }}>{errors.password}</AppText>
              )}

              <AppText style={styles.forget}>Forget Password?</AppText>

              <AppButton title="Login" onPress={handleSubmit} width={150} />
            </>
          )}
        </Formik>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <AppText style={styles.text1}>Don't Have an Account?</AppText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <AppText style={styles.signup}>Sign Up</AppText>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Line width="15%" color={colors.DARKGREEN} />
          <AppText style={{ marginHorizontal: 20, margin: 10 }}>
            Or login with
          </AppText>
          <Line width="15%" color={colors.DARKGREEN} />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 2,
          }}
        >
          <View style={{ right: 20 }}>
            <Icon name="envelope" backgroundColor="#EBE9E9" />
          </View>
          <View style={{ left: 20 }}>
            <Icon name="google" backgroundColor="#EBE9E9" />
          </View>
        </View>
      </View>
    </Screen>
  );
});

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  image: {
    width: "67%",
    height: "26%",
    marginBottom: 16,
  },

  icon: { left: 20, top: 10 },
  login: {
    alignSelf: "flex-start",
    fontSize: 30,
    left: 55,
    color: colors.TITLE,
    fontWeight: "bold",
    marginBottom: 7,
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
