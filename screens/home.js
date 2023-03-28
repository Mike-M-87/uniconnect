import {
  Dimensions,
  Image,
  ImageBackground,
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

export const textColor = "rgb(240,241,242)";
export const textColorAlt = "rgb(200,200,200)";
export const accentColor1 = "rgb(37,47,61)";
export const accentColor2 = "rgb(26,37,48)";
export const accentColor3 = "rgb(53,67,84)";
export const accentColor4 = "rgb(182,190,196)";
export const accentColor5 = "rgb(144,104,213)";
export const accentColor6 = "rgb(199,190,227)";

export default function Home() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[accentColor1, accentColor2]}
    >
      <SafeAreaView>
        <ScrollView style={{paddingBottom:100}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={30} color={textColor} />
            </TouchableOpacity>
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
            {dumCategories.map((fest, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    backgroundColor: index == 0 ? accentColor5 : accentColor3,
                    shadowColor: index == 0 ? accentColor5 : "transparent",
                  },
                  styles.categoryItem,
                ]}
              >
                <Text style={{ color: textColor, fontSize: 20 }}>
                  {fest} festival
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.titleHeader}>
            <Text style={{ fontSize: 35, color: textColor }}>
              Musical festivals
            </Text>
            <TouchableOpacity>
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
                    paddingHorizontal: 20,
                    width: Dimensions.get("window").width,
                  }}
                >
                  <ImageBackground
                    style={styles.eventImage}
                    borderRadius={25}
                    resizeMode="cover"
                    source={require("../assets/poster.jpeg")}
                  >
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

const dumCategories = ["Musical", "Book", "Dance"];

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
    marginHorizontal: 20,
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
});
