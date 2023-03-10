import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { styles, textStyles, Colors } from "./styles";

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
      <Text style={textStyles.h1}>
        {'Astranomical Office'}
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
          onPress={() =>
            navigation.navigate('TabRoot', {name: 'Jane'})
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
    backgroundColor: Colors.green,
  },

  loginText: {
    fontWeight: "500",
  },
})

export default Login;
