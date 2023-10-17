import axios from "axios";
import Cookies from "js-cookie";
import { deleteAllCookies } from "../utils/cookies";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function unAuthorizedResponse() {
  deleteAllCookies();
  window.location.pathname = "/";
}

export function getCall(url) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, {
        headers: { ...(token && { "access-token": `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      const { status } = err.response;
      if (status === 401) return unAuthorizedResponse();
      return reject(err);
    }
  });
}

export function postCall(url, params) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, params, {
        headers: { ...(token && { "access-token": `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      const { status } = err.response;
      if (url === "/api/v1/auth/login") {
        return reject(err);
      }
      if (status === 401) return unAuthorizedResponse();
      return reject(err);
    }
  });
}
export function putCall(url, params) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(url, params, {
        headers: { ...(token && { "access-token": `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      const { status } = err.response;
      if (status === 401) return unAuthorizedResponse();
      return reject(err);
    }
  });
}

export function patchCall(url, params) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(url, params, {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
          Origin: "http://localhost:3000",
          "Content-Type": "application/binary",
        },
      });
      return resolve(response.data);
    } catch (err) {
      const { status } = err.response;
      if (status === 401) return unAuthorizedResponse();
      return reject(err);
    }
  });
}

export function deleteCall(url) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(url, {
        headers: { ...(token && { "access-token": `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      const { status } = err.response;
      if (status === 401) return unAuthorizedResponse();
      return reject(err);
    }
  });
}

export function makeCancelable(promise) {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    // Suppress resolution and rejection if canceled
    promise.then((val) => !isCanceled && resolve(val)).catch((error) => !isCanceled && reject(error));
  });
  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
}
