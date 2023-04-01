import {
  Dimensions,
  Image,
  ImageBackground,
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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HapticButton } from "../components/haptic";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, accentColor7, accentColor8, textColor, textColor2, textColor3, textColorAlt } from "../styles/main";
import { OpenChat } from "../constants";
import { useNavigation } from "@react-navigation/native";


export default function Account() {
  return (

    <SafeAreaView style={{ backgroundColor: accentColor7,flex:1 }}>
      <ScrollView style={{ paddingBottom: 100, paddingHorizontal: 20, paddingTop: 30 }}>
        <View style={{ flexDirection: "column", gap: 20, alignItems: "center" }}>
          <Image source={require("../assets/biz.jpeg")} style={{ height: 70, width: 70, borderRadius: 50, }} />
          <TouchableOpacity>
            <Text style={{ color: textColor3, fontSize: 18 }}>
              Change Profile Picture
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.detailsContainer}>
          <Text style={{ color: textColor2 }}>Name</Text>
          <Text style={styles.details}>Mikey</Text>
        </View>
        <View
          style={styles.detailsContainer}>
          <Text style={{ color: textColor2 }}>Username</Text>
          <Text style={styles.details}>@mikey</Text>
        </View>
        <View
          style={styles.detailsContainer}>
          <Text style={{ color: textColor2 }}>Email</Text>
          <Text style={styles.details}>mikey1234@gmail.com</Text>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <AntDesign name="logout" size={20} color={textColor} />
          <Text style={styles.buyButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  details: {
    color: textColor,
    fontSize: 20,
  },
  detailsContainer: {
    flexDirection: "column",
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: accentColor8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buyButton: {
    backgroundColor: accentColor8,
    padding: 15,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    borderRadius: 25,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
})