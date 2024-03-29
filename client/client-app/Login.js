import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image } from "react-native"
import { styles, textStyles, Colors } from "./styles";
import { APPDATA } from "./data/AppData";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable
} from "react-native";

const LoginStack = createNativeStackNavigator();
const Login = ({navigation}) => {

  function forgotPasswordHandler() {
    navigation.navigate("ForgotPassword");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image source={require('../client-app/assets/images/AST_logo.jpg')} style={{height: 150, width: 365}}>
        </Image>
      </View>
      <Text style={textStyles.h1}>
        {'Office Application'}
      </Text>

      <KeyboardAvoidingView style={styles.inputPane}> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            autoComplete="email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <Pressable onPress={forgotPasswordHandler}>
          <Text style={styles.forgot_button}>
              Forgot Password
          </Text>
          </Pressable>

        <TouchableOpacity 
          style={loginStyles.loginBtn}
          onPress={() => {
            if (APPDATA._accountExists(email)) {
              navigation.navigate('TabRoot', {name: APPDATA.NAME});
            }
          }
          disabled={!email || !password}
        >
          <Text style={loginStyles.loginText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const loginStyles = StyleSheet.create({
  loginBtn: {
    width: "90%",
    borderRadius: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#008000',
  },

  loginText: {
    fontWeight: "500",
  },
})

export default Login;
