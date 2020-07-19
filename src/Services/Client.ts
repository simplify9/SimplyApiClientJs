import Axios from 'axios';

import ApiResponse from '../Models/ApiResponse';

const serverAxios = Axios.create();

serverAxios.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const headers = {
      // Authorization: 'Bearer ',
    };
    config.headers = headers;
    config.baseURL = '';

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

export const SimplyGetAsync = async (uri: string): Promise<ApiResponse> => {
  try {
    const res = await serverAxios.get(uri);

    return {
      status: res.status,
      succeeded: res.status === 200,
      data: res.data,
      error: res.statusText,
    };
  } catch (error) {
    return error.response;
  }
};

export const SimplyPostAsync = async (uri: string, body: any): Promise<ApiResponse> => {
  try {
    const res = await serverAxios.post(uri, { ...body });

    return {
      status: res.status,
      succeeded: res.status === 200,
      data: res.data,
      error: res.statusText,
    };
  } catch (error) {
    return error.response;
  }
};
export const SimplyPutAsync = async (uri: string, body: any): Promise<ApiResponse> => {
  try {
    const res = await serverAxios.put(uri, { ...body });
    return {
      status: res.status,
      succeeded: res.status === 200,
      data: res.data,
      error: res.statusText,
    };
  } catch (error) {
    return error.response;
  }
};

export const SimplyDeleteAsync = async (uri: string): Promise<ApiResponse> => {
  try {
    const res = await serverAxios.delete(uri);
    return {
      status: res.status,
      succeeded: res.status === 200,
      data: res.data,
      error: res.statusText,
    };
  } catch (error) {
    return error.response;
  }
};

export const SimplyPostFormAsync = async (uri: string, formData: any): Promise<ApiResponse> => {
  try {
    const res = await serverAxios({
      method: 'post',
      url: uri,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return {
      status: res.status,
      succeeded: res.status === 200,
      data: res.data,
      error: res.statusText,
    };
  } catch (error) {
    return error.response;
  }
};
