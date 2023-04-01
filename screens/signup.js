import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HapticButton } from "../components/haptic";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, accentColor7, accentColor8, textColor, textColor2, textColor3, textColorAlt } from "../styles/main";
import { useNavigation } from "@react-navigation/native";
import { dumCategories } from "./home";
import { SelectList } from 'react-native-dropdown-select-list'
import * as ImagePicker from 'expo-image-picker';
import { Header } from "../components/header";




const data = [
  { key: 'Canada', value: 'Canada' },
  { key: 'England', value: 'England' },
  { key: 'Pakistan', value: 'Pakistan' },
  { key: 'India', value: 'India' },
  { key: 'NewZealand', value: 'NewZealand' },
]
export default function Signup() {
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(true);
  const navigation = useNavigation()




  return (
    <SafeAreaView style={{ backgroundColor: accentColor7, flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
            <Image source={require("../assets/uniconnect-logo.png")} style={{ height: 200, width: 200 }} />
          </View>

          <View style={{ marginHorizontal: 10, marginTop: 15, paddingBottom: 20 }}>

            <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>FullName</Text>
            <TextInput placeholder="Enter your name" placeholderTextColor={textColor2} style={styles.detailsContainer} />

            <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Username</Text>
            <TextInput placeholder="Enter a custom username" placeholderTextColor={textColor2} style={styles.detailsContainer} />

            <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Email Address</Text>
            <TextInput keyboardType="email-address" placeholder="Enter your email address" placeholderTextColor={textColor2} style={styles.detailsContainer} />

            <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Password</Text>
            <View style={[styles.detailsContainer, { flexDirection: "row", gap: 5, alignItems: "center", paddingVertical: 0,paddingLeft:0  }]}>
              <TextInput
                placeholderTextColor={textColor2}
                style={[styles.detailsContainer]}
                placeholder="Enter password"
                passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                secureTextEntry={passwordVisible}
              />
              <Ionicons name={passwordVisible ? "eye-off-outline" : "eye-outline"} size={24} color={accentColor3} onPress={() => setPasswordVisible(!passwordVisible)} />
            </View>

            <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Confirm Password</Text>

            <View style={[styles.detailsContainer, { flexDirection: "row", gap: 5, alignItems: "center", paddingVertical: 0,paddingLeft:0  }]}>
              <TextInput
                placeholderTextColor={textColor2}
                style={styles.detailsContainer}
                placeholder="Confirm password"
                passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                secureTextEntry={confirmPasswordVisible}
              />
              <Ionicons name={confirmPasswordVisible ? "eye-off-outline" : "eye-outline"} size={24} color={accentColor3} onPress={() => setconfirmPasswordVisible(!confirmPasswordVisible)} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("MainScreen")} style={styles.createButton}>
              <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ marginTop: 30 }}>
              <Text style={{ color: accentColor5, fontSize: 20, textAlign: "center" }}>I already have an account</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "column",
    color: textColor,
    fontSize: 20,
    flexGrow: 1,
    backgroundColor: accentColor8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryItem: {
    padding: 15,
    paddingHorizontal: 20,
    marginLeft: 5,
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: accentColor5,
    padding: 15,
    marginHorizontal: 5,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 20,
  },
  createButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
})