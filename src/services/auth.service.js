import axios from "axios";
const API_BASE_ENDPOINT = "http://localhost:8080/api/auth/";
const LOGIN_ENDPOINT = "signin";
const SIGNUP_ENDPOINT = "signup";
const LOCAL_STORAGE_USER = "user";

class AuthService {
  login(username, password) {
    return axios
      .post(API_BASE_ENDPOINT + LOGIN_ENDPOINT, { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem(LOCAL_STORAGE_USER);
  }
  register(username, email, password) {
    return axios.post(API_BASE_ENDPOINT + SIGNUP_ENDPOINT, {
      username,
      email,
      password,
    });
  }
}
export default new AuthService();