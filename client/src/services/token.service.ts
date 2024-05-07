import { ApiConfig, AppConfig } from "../constants";
import ApiService from "services/api.service";
import Account from "../types/Account";

class TokenService {
  getLocalRefreshToken() {
    const user = this.getUser();
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = this.getUser();
    return user?.accessToken;
  }

  updateLocalAccessToken(token: string) {
    const user = this.getUser();
    user.accessToken = token;
    localStorage.setItem(AppConfig.storageKeys.USER_DATA, JSON.stringify(user));
  }

  isUserLoggedIn() {
    const user = this.getUser();
    return user?.accessToken;
  }

  getUser() {
    return {
      id: "1e0ad92f-c4fb-4e40-9778-7432740a19a5",
      email: "laerciopesa30@hotmail.com",
      password: "$2a$10$r1l8sMtsmcOflxQWkqK9AefPLLE1jYcQxhdmOlRGa1nYuo5WyTGxy",
      firstName: "Laercio Carlos",
      lastName: "Nogueira",
      accountCreatedAt: "2024-04-30T02:37:59.910Z",
      lastLoginAt: "2024-05-02T01:51:56.652Z",
      verified: true,
      expectedOnboarding: [],
      currentOnboarding: [],
      onboarded: false,
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlMGFkOTJmLWM0ZmItNGU0MC05Nzc4LTc0MzI3NDBhMTlhNSIsImVtYWlsIjoibGFlcmNpb3Blc2EzMEBob3RtYWlsLmNvbSIsImlhdCI6MTcxNDYxNDcxNiwiZXhwIjoxNzE0NzAxMTE2fQ.YI5KcIuuYfeBPtBPyNL9qBxB3tFsRXaZvC6lyIq3Y2w",
      refreshToken: "",
    };
    // return JSON.parse(
    // localStorage.getItem(AppConfig.storageKeys.USER_DATA) || "{}"
    // );
  }

  setUser(user: any) {
    // localStorage.setItem(AppConfig.storageKeys.USER_DATA, JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem(AppConfig.storageKeys.USER_DATA);
  }

  async verify(): Promise<boolean> {
    try {
      await ApiService.get({
        url: `${ApiConfig.verify}`,
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
export default new TokenService();
