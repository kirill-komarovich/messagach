export interface ApiResponse<Type> {
  httpStatus: number;
  data: Type;
}

export interface AuthenticationCredentials {
  email: string;
  password: string;
}

export interface AuthenticationUser {
  id: number;
  email: string;
}

export interface AuthenticationErrors {
  authentication: string;
}
