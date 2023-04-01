import request, { gql, RequestDocument } from "graphql-request";
import { API_URL } from "../constants";
import { Alert } from "react-native/types";
import { useNavigation } from "@react-navigation/native";

export async function makeRequest(query, body, withDefaultInput) {
  const navigation = useNavigation()

  try {
    const data = await request(
      API_URL,
      query,
      withDefaultInput ? { input: body } : body
    );
    return data;
  } catch (error) {
    const first_error = error.response?.errors[0];
    const errormsg = first_error?.message;
    if (errormsg == "invalid token") {
      Alert.alert("Please login to continue");
      navigation.navigate("Login");
      return null;
    }
    Alert.alert(errormsg || "network error");
    return null;
  }
}