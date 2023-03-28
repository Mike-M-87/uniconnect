import {
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0.8 }}
      locations={[0.8, 0.1]}
      colors={["rgb(38,46,115)", "rgb(100,50,82)"]}
      style={styles.background}
    >
      <ScrollView
        behavior="position"
        contentContainerStyle={styles.loginView}
        showsVerticalScrollIndicator={false}
      >
        <Image source={require("../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.heading}>Sign in</Text>
        <View style={styles.loginForm}>
          <Text style={styles.formlabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder="yourname@example.com" />
          <Text style={styles.formlabel}>Password</Text>
          <TextInput style={styles.input} placeholder="yourpassword" />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={[styles.formlabel, { marginTop: 50, marginBottom: 10 }]}>
            Don't have an account?
          </Text>
          <Text style={(styles.formlabel, { color: "lightgrey" })}>
            Sign up {"  >"}
          </Text>
        </View>
        <View style={styles.options}></View>
      </ScrollView>
    </LinearGradient>
  );
}

export const textColor = "rgb(144,163,185)";
const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  loginView: {
    flexDirection: "column",
    alignItems: "center",
    height: "110%",
  },
  logo: {
    marginTop: 100,
    height: 100,
    width: 100,
  },
  heading: {
    marginTop: 30,
    fontSize: 50,
    color: "lightgrey",
  },
  loginForm: {
    marginTop: 100,
    marginHorizontal: 100,
    width: "80%",
  },
  formlabel: {
    fontSize: 18,
    color: textColor,
  },
  input: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: textColor,
    padding: 10,
    color: "lightgrey",
  },
  loginButton: {
    backgroundColor: "rgb(37,37,65)",
    padding: 15,
    marginTop: 10,
    paddingHorizontal: 60,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  loginButtonText: {
    color: textColor,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 30,
  },
});