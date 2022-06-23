
import axios from 'axios';
import authHeader from './auth-header';
const API_BASE_ENDPOINT = "http://localhost:8080/api/";
const TEST_ENDPOINT = "test/";
const TEST_ENDPOINT_ALL = "all";
const TEST_ENDPOINT_USER = "user";
const TEST_ENDPOINT_MOD = "mod";
const TEST_ENDPOINT_ADMIN = "admin";

class UserService {
  getPublicContent() {
    return axios.get(API_BASE_ENDPOINT + TEST_ENDPOINT + TEST_ENDPOINT_ALL);
  }
  getUserBoard() {
    return axios.get(API_BASE_ENDPOINT + TEST_ENDPOINT + TEST_ENDPOINT_USER, { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_BASE_ENDPOINT + TEST_ENDPOINT + TEST_ENDPOINT_MOD, { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_BASE_ENDPOINT + TEST_ENDPOINT + TEST_ENDPOINT_ADMIN, { headers: authHeader() });
  }
}
export default new UserService();