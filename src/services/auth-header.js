const LOCAL_STORAGE_USER = "user";

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }