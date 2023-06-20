export interface InAuthUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}
export interface InEmailLoginPayload {
  email: string;
  password: string;
}
