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
import { Ionicons, EvilIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HapticButton } from "../components/haptic";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { dumCategories } from "./home";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, accentColor7, accentColor8, textColor, textColorAlt } from "../styles/main";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/header";



export default function LikedBusiness() {
  const navigation = useNavigation()

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[accentColor1, accentColor2]}
    >
      <SafeAreaView style={{marginHorizontal:10}}>
      <Header/>
        <Text style={{ fontSize: 35, color: textColor, padding: 10 }}>
          Liked Businesses
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 200 }}
        >
          {Array(20).fill(null).map((_, i) =>
            <TouchableOpacity
              onPress={() => navigation.navigate("BusinessDetails")}
              key={i}
              style={styles.eventInfo}>
              <Image source={require("../assets/biz2.avif")} style={{ height: 50, width: 50, }} />
              <View style={{ flexDirection: "column", padding: 10 }}>
                <Text style={styles.eventName}>
                  3X Wear Sneakers
                </Text>
                <Text numberOfLines={2} style={styles.bizDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem veritatis sapiente nulla quas minima eligendi animi sint ipsam non repellat ipsum dolore voluptatibus, maiores deleniti. Eum explicabo libero quam?
                </Text>
              </View>
              <EvilIcons name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  searchContainer: {
    backgroundColor: accentColor8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    color: textColor,
    fontSize: 20,
    flexGrow: 1,
    marginLeft: 10,
  },
  categoryItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    shadowRadius: 7,
  },
  titleHeader: {
    flexDirection: "row",
    margin: 20,
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  eventImage: {
    height: 370,
    position: "relative",
  },
  eventInfo: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventName: {
    color: textColor,
    fontSize: 20,
    fontWeight: "300",
  },
  bizDescription: {
    color: textColorAlt,
    fontSize: 15,
    marginTop: 5,
    maxWidth: "80%",
    fontWeight: "300",
  },
});
