import { Alert, Linking } from "react-native";
import * as Clipboard from 'expo-clipboard';


export async function OpenChat(number) {
  const supported = Linking.canOpenURL("https://wa.me/"+number)
  if (supported) {
    try {
      await Linking.openURL("https://wa.me/"+number);
    } catch (error) {
      console.log(error);
    }
  } else {
    Alert.alert(`Can't Open: ${number}`);
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