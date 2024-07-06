import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const API_URL: string = 'https://api.realworld.io/api';

interface ApiResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: InternalAxiosRequestConfig;
}

class Api {
    
    /**
     * Axios instance
     * @private
     */
    private axiosInstance: AxiosInstance;
    
    /**
     * Creates instance of Api class
     * Initializes Axios instance with base URL
     */
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        /**
         * Request interceptor to automatically include the 
         * authentication token in the request headers.
         *  
         * If a token is present in localStorage, it will
         *  be added to the 'Authorization' header.
         */
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers = config.headers || {};
                    config.headers['Authorization'] = `Token ${token}`;
                }
                return config;
            },
            
            (error) => {
                return Promise.reject(error);
            });
    }
    
    /**
     * Sends a GET request to the specified URL.
     * @template T The expected type of the response data.
     *  @param {string} url The URL to send the GET request to.
     * @param {InternalAxiosRequestConfig} [config] Optional configuration for the request.
     * @returns {Promise<ApiResponse<T>>} A promise that resolves to the API response.
     * 
     * @throws Will throw an error if the request fails.
     */
    public async get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }
  
    /**
     * Performs an HTTP POST request to the specified URL.
     * @template T The expected type of the response data.
     * @param {string} url The URL to send the POST request to.
     * @param {any} [data] Optional data to be sent as the request body.
     * @param {InternalAxiosRequestConfig} [config] Optional Axios request configuration.
     * @returns {Promise<ApiResponse<T>>} A promise that resolves with the API response.
     */ 
    public async post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }
    
    /**
     * Performs an HTTP PUT request to the specified URL.
     * @template T The expected type of the response data.
     * @param {string} url The URL to send the PUT request to.
     * @param {any} [data] Optional data to be sent as the request body.
     * @param {InternalAxiosRequestConfig} [config] Optional Axios request configuration.
     * @returns {Promise<ApiResponse<T>>} A promise that resolves with the API response.
     */
    public async put<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }
    
    /**
     * Performs an HTTP DELETE request to the specified URL.
     * @template T The expected type of the response data.
     * @param {string} url The URL to send the DELETE request to.
     * @param {InternalAxiosRequestConfig} [config] Optional Axios request configuration.
     * @returns {Promise<ApiResponse<T>>} A promise that resolves with the API response.
     */
  
    public async delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }
}

const api = new Api();
export default api;