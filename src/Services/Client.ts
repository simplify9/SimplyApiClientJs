import Axios from 'axios';

import ApiResponse from '../Models/ApiResponse';
import ClientConfig from '../Models/ClientConfig';

import IClient from '../Models/IClient';
import RequestOptions from '../Models/RequestOptions';
import GetBaseUrl from './BaseUrlProvider';



const ClientFactory = (clientConfig: ClientConfig) => {
  const serverAxios = Axios.create();

  serverAxios.interceptors.request.use(
    (config) => {
      let headers = {};
      if (clientConfig.authType &&
        clientConfig.authType === "bearer" &&
        clientConfig.getBearer &&
        clientConfig.getBearer() != null) {
        headers = {
          ...headers,
          Authorization: `Bearer ${clientConfig.getBearer()}`,
        };
      }

      config.headers = headers;
      config.baseURL = clientConfig.baseUrl ?? GetBaseUrl();

      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  serverAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // const originalRequest = error.config;
      // if (401 === error.response.status && !originalRequest._retry) {
      // 	originalRequest._retry = true;

      // } else {
      // 	return Promise.reject(error);
      // }
      return Promise.reject(error);
    },
  );

  const client: IClient = {
    SimplyGetAsync: async (uri: string, options?: RequestOptions): Promise<ApiResponse> => {
      try {
        
        if (clientConfig.debug)
        {
          console.log(`${options?.id}-uri`, uri);
        }

        const res = await serverAxios.get(uri);

        return {
          status: res.status,
          succeeded: res.status >= 200 && res.status < 300,
          data: res.data,
          error: res.statusText,
        };
      } catch (error) {
        const r = error.response;
        return {
          status: r.status,
          succeeded: r.status >= 200 && r.status < 300,
          data: r.data,
          error: r.statusText,
        };
      }
    },
    SimplyPostAsync: async (uri: string, body: any, options?: RequestOptions): Promise<ApiResponse> => {
      try {
       
        if (clientConfig.debug) {
          console.log(`${options?.id}-uri`, uri);
        }
        const res = await serverAxios.post(
          uri,
          body,
        );

        return {
          status: res.status,
          succeeded: res.status >= 200 && res.status < 300,
          data: res.data,
          error: res.statusText,
        };
      } catch (error) {
        const r = error.response;
        return {
          status: r.status,
          succeeded: r.status >= 200 && r.status < 300,
          data: r.data,
          error: r.statusText,
        };
      }
    },
    SimplyPutAsync: async (uri: string, body: any, options?: RequestOptions): Promise<ApiResponse> => {
      try {
        if (clientConfig.debug) {
          console.log(`${options?.id}-uri`, uri);
        }
        const res = await serverAxios.put(
          uri,
          body,
        );
        return {
          status: res.status,
          succeeded: res.status >= 200 && res.status < 300,
          data: res.data,
          error: res.statusText,
        };
      } catch (error) {
        const r = error.response;
        return {
          status: r.status,
          succeeded: r.status >= 200 && r.status < 300,
          data: r.data,
          error: r.statusText,
        };
      }
    },
    SimplyDeleteAsync: async (uri: string, options?: RequestOptions): Promise<ApiResponse> => {
      try {
        if (clientConfig.debug) {
          console.log(`${options?.id}-uri`, uri);
        }
        const res = await serverAxios.delete(uri);
        return {
          status: res.status,
          succeeded: res.status >= 200 && res.status < 300,
          data: res.data,
          error: res.statusText,
        };
      } catch (error) {
        const r = error.response;
        return {
          status: r.status,
          succeeded: r.status >= 200 && r.status < 300,
          data: r.data,
          error: r.statusText,
        };
      }
    },
    SimplyPostFormAsync: async (uri: string, formData: any, options?: RequestOptions): Promise<ApiResponse> => {
      try {

        if (clientConfig.debug) {
          console.log(`${options?.id}-uri`, uri);
        }
        const res = await serverAxios({
          method: 'post',
          url: uri,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        return {
          status: res.status,
          succeeded: res.status >= 200 && res.status < 300,
          data: res.data,
          error: res.statusText,
        };
      } catch (error) {
        const r = error.response;
        return {
          status: r.status,
          succeeded: r.status >= 200 && r.status < 300,
          data: r.data,
          error: r.statusText,
        };
      }
    },
  };

  return client;
};

export default ClientFactory;
