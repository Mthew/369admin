import axios, { AxiosInstance } from "axios";

import {
  API_KEY,
  API_URL,
  STATUS_CODE,
  TYPE_MESSAGE,
} from "../config/constants";
// import { showError, showWarning } from "../utils/message";

const showWarning = () => {};
const showError = (data: any) => {};

class AxiosCreate {
  private static _instance: AxiosInstance;

  constructor() {
    const headers = {
      "x-api-key": API_KEY,
    };
    AxiosCreate._instance = axios.create({
      baseURL: API_URL,
      headers,
    });

    AxiosCreate._instance.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error.response.status) {
          case 401:
            if (error.request.responseURL?.indexOf("signIn") === -1) {
              document.location.href = "/login";
            }
            return Promise.resolve(error.response);
          case 500:
            if (error.response?.data?.statusCode === STATUS_CODE.FAILURE) {
              return Promise.reject({
                type: TYPE_MESSAGE.Error,
                message: error.response?.data?.message,
              });
            }
            return Promise.reject(error);
          case 501:
          case 400:
            let message = null;
            if (error.response?.data?.statusCode === STATUS_CODE.FAILURE) {
              message = error.response?.data?.message;
              showError(message);
            }
            if (
              error.response?.data?.statusCode === STATUS_CODE.VALIDATION_ERROR
            ) {
              message = error.response?.data?.message;
            }
            return Promise.reject(message || error);
          default:
            return Promise.reject(error);
        }
      }
    );
  }

  get instance() {
    return AxiosCreate._instance;
  }
}

const InstAx = new AxiosCreate();

export default InstAx.instance;

export const setToken = (token: string) => {
  InstAx.instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  InstAx.instance.defaults.headers.Authorization = null;
};
