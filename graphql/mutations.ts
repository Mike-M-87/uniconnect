import { gql } from "graphql-request";
import { makeRequest } from "./network";



export async function LOGIN() {
  const query = gql`
    mutation Login($input: LoginInput!) {
      Login(input: $input) {
        token
        name
      }
    }
  `;
  return await makeRequest(query, null, true);
}