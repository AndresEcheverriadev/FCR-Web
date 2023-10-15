import { LocalStorageService } from "./LocalStorageService.js";
import { HTTPRequestService } from "./HTTPRequestService.js";

const login = async (password) => {
  try {
    // const checkToken = await checkToken();
    // if (checkToken) {
    //   logout();
    // }
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_SERVER_URL_LOGIN,
      {
        password,
      }
    );
    if (data.status === 200 && data.data) {
      LocalStorageService.setItem("token", data.data);
      return { success: true, user: data.data.user };
    }
    return { success: false };
  } catch (error) {
    return { success: false };
  }
};

const register = async ({ userName, password }) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_API_REGISTER_URL,
      {
        userName,
        password,
      }
    );
    return { success: data.status === 200 };
  } catch (error) {
    return { success: false };
  }
};

const checkToken = async () => {
  try {
    const token = await LocalStorageService.getItem("token");
    if (!token) return { success: false };
    return { success: true, user: true };
  } catch (error) {
    return { success: false };
  }
};

const logout = async () => {
  try {
    const deleteToken = await LocalStorageService.removeItem("token");
    if (!deleteToken) return { success: false };
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const AuthService = { login, register, checkToken, logout };
