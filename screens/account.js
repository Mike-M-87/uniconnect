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
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HapticButton } from "../components/haptic";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6, accentColor7, accentColor8, textColor, textColor2, textColor3, textColorAlt } from "../styles/main";
import { OpenChat } from "../constants";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';



export default function Account() {
  const [image, setImage] = useState();

  async function PickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[accentColor1, accentColor2]}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 100, paddingTop: 30 }}>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "column", gap: 20, alignItems: "center", marginBottom: 20 }}>
              <Image source={{ uri: image }} style={{ height: 100, width: 100, borderRadius: 50, borderColor: accentColor3, borderWidth: 0.2 }} />
              <TouchableOpacity onPress={() => PickImage()} style={{ backgroundColor: accentColor5, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 25 }}>
                <Text style={{ color: textColor, fontSize: 18 }}>
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
              <Text style={{ color: textColor2 }}>Phone Number</Text>
              <Text style={styles.details}>25412345678</Text>
            </View>

            <View
              style={styles.detailsContainer}>
              <Text style={{ color: textColor2 }}>Email</Text>
              <Text style={styles.details}>mikey1234@gmail.com</Text>
            </View>
          </View>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: textColor, marginVertical: 20, marginLeft: 10 }}>Preferences</Text>

          <View style={{ backgroundColor: accentColor2, padding: 20, margin: 10, borderRadius: 10 }}>
            <TouchableOpacity style={styles.accountOption}>
              <Text style={styles.optionText}>
                Change Password
              </Text>
              <EvilIcons name="chevron-right" size={24} color={textColor3} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.accountOption}>
              <Text style={styles.optionText}>
                Change Username
              </Text>
              <EvilIcons name="chevron-right" size={24} color={textColor3} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.accountOption, { borderBottomWidth: 0 }]}>
              <Text style={styles.optionText}>
                Change Phone Number
              </Text>
              <EvilIcons name="chevron-right" size={24} color={textColor3} />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: textColor, marginVertical: 20, marginLeft: 10 }}>Support</Text>

          <View style={{ backgroundColor: accentColor2, padding: 20, margin: 10, borderRadius: 10 }}>
            <TouchableOpacity style={styles.accountOption}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: textColor2, fontSize: 18 }}>
                  Info
                </Text>
                <Text style={styles.optionText}>
                  Help and Support
                </Text>
              </View>
              <EvilIcons name="chevron-right" size={24} color={textColor3} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton}>
            <AntDesign name="logout" size={20} color={textColor} />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
        
      </SafeAreaView>
    </LinearGradient>
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
    backgroundColor: accentColor3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoutButton: {
    backgroundColor: accentColor7,
    padding: 15,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    borderRadius: 25,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
  accountOption: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: accentColor3,
    borderBottomWidth: 0.2,
  },
  optionText: {
    color: textColor3,
    fontSize: 20,
    fontWeight: "300",
  },
})