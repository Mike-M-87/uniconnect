import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  accentColor1,
  accentColor2,
  accentColor5,
  accentColor6,
  textColorAlt,
} from "./home";
import { textColor } from "./login";
import { Ionicons } from "@expo/vector-icons";

// import * as React from "react";
import MapView from "react-native-maps";

export default function BusinessInfo() {
  return (
    <SafeAreaView style={{ backgroundColor: accentColor1 }}>
      <ScrollView style={{ backgroundColor: accentColor1 }}>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            left: 20,
            right: 20,
            top: 50,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30} color="lightgrey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <Image
          source={require("../assets/poster.jpeg")}
          resizeMode="contain"
          style={{ width: Dimensions.get("screen").width, height: 300 }}
        ></Image>

        <View style={{ marginHorizontal: 15, paddingBottom: 100 }}>
          <Text style={{ fontSize: 50, marginTop: 10, color: "white" }}>
            Rockfield
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Ionicons
              name="calendar-outline"
              size={22}
              color={"rgb(199,190,227)"}
            />
            <Text
              style={{
                color: textColorAlt,
                marginRight: 30,
                marginLeft: 10,
                fontSize: 17,
              }}
            >
              {new Date().toDateString()}
            </Text>
            <Ionicons name="time-outline" size={24} color={accentColor6} />
            <Text style={{ color: textColorAlt, marginLeft: 10, fontSize: 17 }}>
              4pm - 12pm
            </Text>
          </View>

          <Text
            style={{
              color: textColorAlt,
              marginTop: 20,
              fontSize: 25,
              fontWeight: "500",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: textColorAlt,
              marginVertical: 10,
              fontSize: 17,
              lineHeight: 30,
            }}
            numberOfLines={2}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nihil
            eaque nesciunt voluptates! Blanditiis placeat iure alias ipsam
            eaque, numquam tempore nemo ullam ut ducimus sint nihil atque enim?
            Facilis.
          </Text>

          <TouchableOpacity>
            <Text style={{ color: accentColor6, fontSize: 18 }}>Read more</Text>
          </TouchableOpacity>
          <MapView style={styles.map} />
          <Text
            style={{
              color: textColorAlt,
              marginTop: 20,
              fontSize: 25,
              fontWeight: "500",
            }}
          >
            Interesting
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/icon.png")}
              style={[styles.interestImage, { marginLeft: 0 }]}
            />
            <Image
              source={require("../assets/icon.png")}
              style={styles.interestImage}
            />
            <Image
              source={require("../assets/icon.png")}
              style={styles.interestImage}
            />
            <Image
              source={require("../assets/icon.png")}
              style={styles.interestImage}
            />
            <View style={[styles.interestImage, { backgroundColor: "white" }]}>
              <Text style={styles.interestText}>342+</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Contact Business</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    marginTop: 20,
    height: 200,
    borderRadius: 20,
  },
  interestImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: -20,
    overflow: "hidden",
  },
  interestText: {
    position: "absolute",
    top: 17,
    left: 10,
  },
  buyButton: {
    backgroundColor: accentColor5,
    padding: 20,
    marginHorizontal: 5,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    shadowRadius: 7,
    shadowColor: accentColor5,
    borderRadius: 25,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
});
