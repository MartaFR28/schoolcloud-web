import axios from "axios";
import { getAccessToken, logout } from "../stores/AccessTokenStore";

const INVALID_STATUS_CODES = [401];

 export const createHttp = (useAccessToken = false) => {
  const http = axios.create({
    baseURL: 'http://localhost:3000',
});

http.interceptors.request.use((config) => {
  if (useAccessToken && getAccessToken()) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
  } else {
    return config;
  }  
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response?.status && INVALID_STATUS_CODES.includes(error.response.status)) { // Si tengo un error 401, probablemente movida de JWT. Borro el token y te llevo al login
      if (getAccessToken()) {
        logout()

        // if (window.location.pathname !== "/login") {
        //   window.location.assign("/login");
        // }
      }
    }

    return Promise.reject(error)
  }
)

return http;
}

