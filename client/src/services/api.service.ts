import axios from "axios";
import { ApiConfig, AppConfig } from "../constants";
import config, { API_BASE_URL_KEY } from "config";

export interface ApiServiceArgs<T extends Record<string, any>> {
  url: string;
  options?: T & {
    fakeAPI?: boolean;
    jsonServer?: boolean;
    cancelToken?: string;
  };
}

const instance = axios.create({
  baseURL: API_BASE_URL_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (conf) => {
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url === ApiConfig.login) {
    }
    if (originalConfig.url !== ApiConfig.login && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          return await instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

const ApiService = {
  async get<T = any, R extends Record<string, any> = Record<string, any>>({
    url,
    options,
  }: ApiServiceArgs<R>) {
    const { fakeAPI = false, jsonServer = false, ...rest } = options || {};
    return instance.get<T>(url, {
      ...(fakeAPI && { baseURL: AppConfig.FAKE_SERVER_URL }),
      ...(jsonServer && { baseURL: AppConfig.JSON_SERVER_URL }),
      ...rest,
    });
  },
  async post<T = any, R extends Record<string, any> = Record<string, any>>({
    url,
    options,
  }: ApiServiceArgs<R>) {
    const {
      fakeAPI = false,
      jsonServer = false,
      cancelToken,
      ...rest
    } = options || {};
    return instance.post<T>(url, {
      ...(fakeAPI && { baseURL: AppConfig.FAKE_SERVER_URL }),
      ...(jsonServer && { baseURL: AppConfig.JSON_SERVER_URL }),
      cancelToken,
      ...rest,
    });
  },
  async put<T = any, R extends Record<string, any> = Record<string, any>>({
    url,
    options,
  }: ApiServiceArgs<R>) {
    const { fakeAPI = false, ...rest } = options || {};
    return instance.put<T>(url, {
      ...(fakeAPI && { baseURL: AppConfig.FAKE_SERVER_URL }),
      ...rest,
    });
  },
  async delete<T = any, R extends Record<string, any> = Record<string, any>>({
    url,
    options,
  }: ApiServiceArgs<R>) {
    const { fakeAPI = false, ...rest } = options || {};
    return instance.delete<T>(url, {
      ...(fakeAPI && { baseURL: AppConfig.FAKE_SERVER_URL }),
      ...rest,
    });
  },
  async patch<T = any, R extends Record<string, any> = any>({
    url,
    options,
  }: ApiServiceArgs<R>) {
    const { fakeAPI = false, ...rest } = options || {};
    return instance.patch<T>(url, {
      ...(fakeAPI && { baseURL: AppConfig.FAKE_SERVER_URL }),
      ...rest,
    });
  },
};
export default ApiService;
