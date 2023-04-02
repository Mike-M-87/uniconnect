import { gql } from "../node_modules/graphql-request/build/esm/index";
import { makeRequest } from "./network";
import { CreateBusinessResponse, ErrorResponse, LikeBusinessResponse, LoginInput, LoginResponse, PostCommentInput, PostCommentResponse, RegisterInput, RegisterResponse } from "../types/types";



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



export async function CREATE_BUSINESS(body: RegisterInput) {
  const query = gql`
    mutation refactored270($input: CreateBusinessInput!) {
      CreateBusiness(input: $input)
    }`;
  const res: CreateBusinessResponse = await makeRequest(query, body, true);
  return res
}

export async function LIKE_BUSINESS(authToken: string, businessId: string) {
  const query = gql`
    mutation refactored500($token: String!, $bizId: String!) {
      LikeBusiness(token: $token, bizId: $bizId)
    }`;
  const res: LikeBusinessResponse = await makeRequest(query, { token: authToken, bizId: businessId }, false);
  return res
}


export async function POST_COMMENT(body: PostCommentInput) {
  const query = gql`
    mutation refactored93($input: PostCommentInput!) {
      PostComment(input: $input)
  }`;
  const res: PostCommentResponse = await makeRequest(query, body, false);
  return res
}