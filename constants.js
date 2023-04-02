import { Alert, Linking } from "react-native";
import * as Clipboard from 'expo-clipboard';

export const API_URL = "http://192.168.0.34:8081/query";

export const AUTHTOKEN = "token"

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

export function capitalize(s) {
  return s.toString()[0].toUpperCase() + s.toString().slice(1);
}

export async function CopyToClipBoard(text) {
  try {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied to clipboard")
  } catch (error) {
    console.log(error);
  }
}