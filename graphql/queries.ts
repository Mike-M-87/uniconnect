import { gql } from "../node_modules/graphql-request/build/esm/index";
import { FetchBusinessDetailsResponse, FetchBusinessListInput, FetchBusinessListResponse, FetchUserResponse } from "../types/types";
import { makeRequest } from "./network";

export async function FETCH_USER_DATA(authToken: string) {
  const query = gql`
  query refactored35($token: String!) {
    fetchUserData(token: $token) {
      id
      name
      email
      username
      profilePhoto
      verified
    }
  }`
  const res: FetchUserResponse = await makeRequest(query, { token: authToken }, false)
  return res
}


export async function FETCH_BUSINESSES_LIST(body: FetchBusinessListInput) {
  const query = gql`
  query refactored630($input: FetchBusinessListInput!) {
    FetchBusinessList(input: $input) {
      id
      name
      type
      description
      location
      website
      contact
      image
      ownerName
    }
  }`
  const res: FetchBusinessListResponse = await makeRequest(query, body, true)
  return res
}


export async function FETCH_BUSINESSES_DETAILS(authToken: string, businessId: string) {
  const query = gql`
  query refactored713($token: String!, $bizId: String!) {
    FetchBusiness(token: $token, bizId: $bizId) {
      id
      name
      type
      description
      location
      website
      contact
      image
      ownerName
    }
  }`
  const res: FetchBusinessDetailsResponse = await makeRequest(query, { token: authToken, bizId: businessId }, false)
  return res
}