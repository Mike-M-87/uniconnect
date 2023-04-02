import { gql } from "../node_modules/graphql-request/build/esm/index";
import { makeRequest } from "./network";
import { ErrorResponse, LoginInput, LoginResponse, RegisterInput, RegisterResponse } from "../types/types";



export async function LOGIN(body: LoginInput) {
  const query = gql`
    mutation Login($input: LoginInput!) {
      Login(input: $input) {
        token
      }
    }`;
  const res: LoginResponse = await makeRequest(query, body, true);
  return res
}


export async function REGISTER(body: RegisterInput) {
  const query = gql`
    mutation refactored781($input: RegisterInput!) {
      Register(input: $input) {
        token
      }
    }`;
  const res: RegisterResponse = await makeRequest(query, body, true);
  return res
}