import axios from "axios";
import { AuthService } from "./AuthService.js";
import { LocalStorageService } from "./LocalStorageService.js";

const get = async (url) => {
  const token = LocalStorageService.getItem("token");
  try {
    const response = await axios.get(url, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Request no autorizado"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const post = async (url, data) => {
  const token = LocalStorageService.getItem("token");
  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const postImage = async (url, data) => {
  const token = LocalStorageService.getItem("token");
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

const remove = async (url) => {
  const token = LocalStorageService.getItem("token");
  try {
    const response = await axios.delete(url, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Request no autorizado"
    ) {
      AuthService.logout();
      window.location.replace("/");
      return;
    }
    console.error(error);
  }
};

export const HTTPRequestService = { get, post, postImage, remove };
