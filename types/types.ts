export interface RegisterInput {
  fullname: string
  username: string
  email: string
  password: string
  confirmpassword: string
}

export interface LoginInput {
  emailorUsername: string
  password: string
}

export interface LoginResponse {
  Login: AuthPayload
}

export interface RegisterResponse {
  Register: AuthPayload
}

export interface AuthPayload {
  token: string
}


export interface ErrorResponse {
  errors: Error[]
  data: any
}

export interface Error {
  message: string
  path: string[]
}


export interface FetchUserResponse {
  fetchUserData: FetchUserData
}

export interface FetchUserData {
  id: string
  name: string
  email: string
  username: string
  profilePhoto: string
  verified: boolean
}

export enum BusinessType {
  SHOP,
  SERVICE,
  EVENT,
  JOB,
  NEWS,
  HOUSING,
  TUTOR,
}

export const BusinessTypes = [
  "SHOP",
  "SERVICE",
  "EVENT",
  "JOB",
  "NEWS",
  "HOUSING",
  "TUTOR",
]

export interface FetchBusinessListInput {
  token: string
  type: BusinessType
  searchTerm: string
}

export interface FetchBusinessListResponse {
  FetchBusinessList: FetchBusinessList[]
}

export interface FetchBusinessDetailsResponse {
  FetchBusiness: FetchBusinessList
}

export interface FetchBusinessList {
  id: string
  name: string
  type: string
  description: string
  location: string
  website: string
  contact: string
  image: string
  ownerName: string
}


export interface CreateBusinessInput {
  token: string
  type: BusinessType
  name: string
  description: string
  location: string
  websitess: string
  contact: string
  image: string
}
export interface CreateBusinessResponse {
  CreateBusiness: boolean
}
