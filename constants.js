import { Alert, Linking } from "react-native";
import * as Clipboard from 'expo-clipboard';
export const API_URL = "http://localhost:8081/query";

export async function OpenLink(link) {
  const supported = Linking.canOpenURL(link)
  if (supported) {
    try {
      await Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  } else {
    Alert.alert(`Can't Open: ${link}`);
  }
}

export async function CopyToClipBoard(text) {
  try {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied to clipboard")
  } catch (error) {
    console.log(error);
  }
}