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
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HapticButton } from "../components/haptic";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, textColor, textColorAlt } from "../styles/main";
import { OpenChat } from "../constants";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const [category, setcategory] = useState(dumCategories[0]);
  const navigation = useNavigation()

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[accentColor1, accentColor2]}
    >
      <SafeAreaView>
        <ScrollView style={{ paddingBottom: 100 }}>
          <View style={styles.headerContainer}>
            <Image source={require("../assets/biz.jpeg")} style={{ height: 35, width: 35, borderRadius: 50, }} />
            <TouchableOpacity>
              <Ionicons name="notifications" size={30} color={textColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color={accentColor4} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={accentColor4}
              style={styles.searchInput}
            />
            <Ionicons name="filter" size={24} color={accentColor4} />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 25, paddingLeft: 10 }}
          >
            {dumCategories.map((cat, index) => (
              <TouchableOpacity
                onPress={() => setcategory(cat)}
                key={index}
                style={[
                  {
                    backgroundColor: cat == category ? accentColor5 : accentColor3,
                    shadowColor: cat == category ? accentColor5 : "transparent",
                  },
                  styles.categoryItem,
                ]}
              >
                <Text style={{ color: textColor, fontSize: 20 }}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.titleHeader}>
            <Text style={{ fontSize: 35, color: textColor }}>
              Campus {category}
            </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate("BusinessList")
            }}>
              <Text style={{ color: accentColor4, fontSize: 20 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {Array(20)
              .fill(null)
              .map((_, i) => (
                <HapticButton
                  weight="heavy"
                  key={i}
                  style={{
                    paddingHorizontal: 15,
                    width: Dimensions.get("window").width,
                  }}
                >
                  <ImageBackground
                    style={styles.eventImage}
                    borderRadius={25}
                    resizeMode="cover"
                    source={require("../assets/biz2.avif")}
                  >
                    <View style={styles.eventInfoContainer}>
                      <BlurView
                        style={styles.eventInfo}
                        intensity={Platform.OS == "ios" && 50}
                        tint="light"
                      >
                        <View style={{ flexDirection: "column", padding: 10 }}>
                          <Text style={styles.eventName}>
                            3X Wear Sneakers
                          </Text>
                          <Text style={styles.bizNumber}>
                            0712345678
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => OpenChat("254113359777")} style={styles.chatButton}>
                          <Ionicons name="chatbox" size={24} color={accentColor5} />
                        </TouchableOpacity>
                      </BlurView>
                    </View>
                    <TouchableOpacity>
                      <Ionicons
                        style={styles.eventLikeIcon}
                        name="heart"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </HapticButton>
              ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export const dumCategories = [
  "Shops",
  "Services",
  "Events",
  "Jobs",
  "News",
  "Housing",
  "Tutors",
];

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  searchContainer: {
    backgroundColor: accentColor3,
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  searchInput: {
    color: textColor,
    fontSize: 20,
    flexGrow: 1,
    marginLeft: 10,
  },
  categoryItem: {
    padding: 15,
    paddingHorizontal: 20,
    marginLeft: 20,
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
  eventLikeIcon: {
    right: 0,
    position: "absolute",
    color: "white",
    borderRadius: 20,
    margin: 10,
    overflow: "hidden",
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  eventInfoContainer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: Platform.OS == "android" && "rgba(0,0,0,0.9)",
    borderRadius: 25,
    borderTopRightRadius: 0,
    overflow: "hidden",
    borderTopLeftRadius: 0,
  },
  eventInfo: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventName: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  bizNumber: {
    color: "white",
    fontSize: 17,
    marginTop: 5,
    fontWeight: "600",
  },
  chatButton: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 30,
    fontSize: 20,
    fontWeight: "600",
    overflow: "hidden",
  },
});
