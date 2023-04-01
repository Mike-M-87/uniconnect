import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, accentColor7, accentColor8, textColor, textColor2, textColor3, textColorAlt } from "../styles/main";
import { BottomSheet } from 'react-native-btr';
import { CopyToClipBoard, OpenLink } from "../constants";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Header } from "../components/header";

export default function BusinessInfo() {
  const [readMore, setreadMore] = useState(false)
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: accentColor1 }}>
      <Header />
      <ScrollView style={{ backgroundColor: accentColor1, paddingBottom: 50 }}>
        <Image
          source={require("../assets/biz2.avif")}
          resizeMode="cover"
          style={{ height: 300, width: Dimensions.get("screen").width }}
        ></Image>

        <View style={{ paddingHorizontal: 15, paddingBottom: 20 }}>
          <Text style={styles.title}>
            3xWear Sneakers
          </Text>

          <View style={styles.detailsContainer}>
            <TouchableOpacity onLongPress={() => CopyToClipBoard("355 Mayor Road")} style={styles.bizDetails}>
              <Ionicons name="location-outline" size={20} color={accentColor6} />
              <Text style={styles.detailsText}>
                355 Mayor Road
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onLongPress={() => CopyToClipBoard("254113359777")} style={styles.bizDetails}>
              <Ionicons name="call-outline" size={20} color={accentColor6} />
              <Text style={styles.detailsText}>
                254113359777
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onLongPress={() => OpenLink("https://expo.dev")} style={styles.bizDetails}>
              <Ionicons name="ios-link" size={20} color={accentColor6} />
              <Text style={styles.detailsText}>
                expo.dev
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.description} numberOfLines={readMore ? undefined : 2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nihil
            eaque nesciunt voluptates! Blanditiis placeat iure alias ipsam
            eaque, numquam tempore nemo ullam ut ducimus sint nihil atque enim?
            Facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aut non suscipit molestiae hic, et eveniet qui delectus! Quis neque non rem in doloremque veritatis aliquam blanditiis explicabo! Vitae, cum!
          </Text>
          <TouchableOpacity onPress={() => setreadMore(!readMore)}>
            <Text style={{ color: accentColor5, fontSize: 18 }}>{readMore ? "Show Less" : "Read more"}</Text>
          </TouchableOpacity>

          <View style={styles.feedBackContainer}>
            <TouchableOpacity style={styles.feedBackButton}>
              <Ionicons
                name="heart-outline"
                size={30}
                color={textColor}
              />
              <Text style={{ color: textColor, fontSize: 18 }}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.feedBackButton}>
              <Ionicons style={styles.eventLikeIcon} name="chatbubble-outline" size={24} color={textColor} />
              <Text style={{ color: textColor, fontSize: 18 }}>Comment</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buyButton} onPress={() => OpenLink("https://wa.me/254113359777")}>
            <Text style={styles.buyButtonText}>Chat on WhatsApp</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <BottomSheet
        visible={visible}
        onBackButtonPress={() => setVisible(!visible)}
        onBackdropPress={() => setVisible(!visible)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.bottomNavigationView}>

          <View style={{ borderBottomColor: accentColor6, borderBottomWidth: 0.2, padding: 20 }}>
            <Text style={{ fontSize: 25, color: textColor }}>Comments</Text>
          </View>
          <ScrollView>
            {Array(20).fill(null).map((_, i) => (
              <View key={i} style={{ borderBottomColor: accentColor3, borderBottomWidth: 0.2, padding: 10 }}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image source={require("../assets/biz.jpeg")} style={{ height: 50, width: 50, borderRadius: 50, }} />
                  <View style={{ flexDirection: "column", gap: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: textColor }}>John Wafula</Text>
                    <Text style={{ color: textColor, marginRight: 65 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, libero eligendi ex adipisci voluptatem quisquam enim hic vel rerum eaque praesentium iusto quod cupiditate rem earum neque, reiciendis commodi tempore!</Text>
                  </View>
                  <Text style={{ marginLeft: "auto", fontSize: 15, color: textColor2 }}>5 months ago</Text>
                </View>
              </View>
            ))}

          </ScrollView>
          <View style={styles.textinput}>
            <TextInput
              style={{ flexGrow: 1, maxWidth: "90%", color: textColor, paddingBottom: 5, fontSize: 17 }}
              multiline
              placeholder="Type Comment Here"
              placeholderTextColor={textColor2}
            />
            <TouchableOpacity>
              <Ionicons name="md-send" size={30} color={accentColor4} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </BottomSheet>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 40, marginTop: 10, color: textColor },
  bizDetails: { flexDirection: "row", alignItems: "center", gap: 5 },
  detailsContainer: { marginTop: 20, flexDirection: "row", flexWrap: "wrap", gap: 10 },
  descTitle: {
    color: textColorAlt,
    marginTop: 25,
    fontSize: 25,
    fontWeight: "500",
  },
  description: {
    color: textColorAlt,
    marginVertical: 10,
    fontSize: 17,
    lineHeight: 30,
  },
  detailsText: {
    color: textColorAlt,
    fontSize: 18,
  },
  map: {
    marginTop: 30,
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
  feedBackContainer: {
    flexDirection: "row",
    backgroundColor: accentColor3,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 5,
  },
  feedBackButton: {
    flexDirection: "row", alignItems: "center", gap: 10, padding: 20,
  },
  bottomNavigationView: {
    backgroundColor: accentColor2,
    height: Dimensions.get("window").height - 200,
  },
  textinput: {
    marginBottom: 30,
    marginTop: 10,
    padding: 15,
    borderRadius: 25,
    backgroundColor: accentColor3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});


