export interface InAuthUser {
  uid: string;
  email: string | null;
}
export interface InEmailLoginPayload {
  email: string;
  password: string;
}
