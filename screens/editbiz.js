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
export default function EditBusiness() {
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);
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

  console.log(image);


  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[accentColor1, accentColor2]}
    >
      <SafeAreaView>
        <Header title="Business Name" />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}>
            {image ?
              <>
                <Image
                  source={{ uri: image }}
                  resizeMode="cover"
                  style={{ height: 300, width: Dimensions.get("screen").width }}
                >
                </Image>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 15 }} onPress={() => setImage(null)}>
                  <EvilIcons name="trash" size={24} color={textColor3} />
                  <Text style={{ color: textColor3 }}>Remove image</Text>
                </TouchableOpacity>
              </>
              :
              <View style={{ height: 300, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: textColor3 }}>No Photo Selected</Text>
              </View>
            }

            <View style={{ marginHorizontal: 10, paddingBottom: 130, marginTop: 15, }}>
              <TouchableOpacity onPress={() => PickImage()} style={{ padding: 10, backgroundColor: accentColor5, borderRadius: 25 }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
                  Select a new Image or logo for your business
                </Text>
              </TouchableOpacity>

              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Edit the Type of Business</Text>
              <SelectList
                boxStyles={{ backgroundColor: accentColor3, borderWidth: 0, paddingVertical: 15 }}
                inputStyles={{ color: textColor2, fontSize: 20, marginLeft: 10 }}
                dropdownStyles={{ backgroundColor: accentColor8, borderWidth: 0 }}
                dropdownTextStyles={{ color: textColor2, fontSize: 18 }}
                dropdownItemStyles={{ width: "100%" }}
                arrowicon={<EvilIcons name="chevron-down" size={24} color={textColor2} />}
                searchicon={<EvilIcons name="search" size={24} color={textColor2} />}
                closeicon={<EvilIcons name="chevron-up" size={24} color={textColor2} />}
                setSelected={setSelected} data={dumCategories}
              />
              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Business Name</Text>
              <TextInput placeholder="Enter a new name of your business" placeholderTextColor={textColor2} style={styles.detailsContainer} />
              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Description</Text>
              <TextInput placeholder="Enter the business description" placeholderTextColor={textColor2} numberOfLines={4} style={styles.detailsContainer} />

              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Location</Text>
              <TextInput placeholder="Edit the business location" placeholderTextColor={textColor2} style={styles.detailsContainer} />

              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>Website (optional)</Text>
              <TextInput placeholder="Website for your business (Optional)" placeholderTextColor={textColor2} style={styles.detailsContainer} />

              <Text style={{ color: textColor3, marginBottom: 10, marginTop: 20 }}>WhatsApp Business Contact</Text>
              <TextInput keyboardType="phone-pad" placeholder="Enter the Whats App business number" placeholderTextColor={textColor2} style={styles.detailsContainer} />

              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "column",
    color: textColor,
    fontSize: 20,
    flexGrow: 1,
    backgroundColor: accentColor3,
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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    shadowRadius: 7,
    shadowColor: accentColor5,
    borderRadius: 25,
  },
  createButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
})