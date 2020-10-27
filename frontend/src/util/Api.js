import axios from 'axios';

class Api {

    static get(url, validate, onSuccess, onFailure, config = {}) {
        axios.get(url, this.getRequestConfig(config))
            .then(function (response) {
                try {
                    validate(response);
                    onSuccess(response);
                } catch (error) {
                    onFailure(error);
                }
            })
            .catch(function (error) {
                onFailure(error);
            })
            .then(function () {
                // always executed
            });
    }
    
    static post(url, validate, onSuccess, onFailure, config = {}, data = null) {
        const finalConfig = this.getRequestConfig(config);
        axios.post(url, data ? data : finalConfig.data, finalConfig)
            .then(function (response) {
                try {
                    validate(response);
                    onSuccess(response);
                } catch (error) {
                    onFailure(error);
                }
            })
            .catch(function (error) {
                onFailure(error);
            })
            .then(function () {
                // always executed
            });
    }

    static getRequestConfig(config = {}) {
        let defaultConfig = {
            baseURL: process.env.REACT_APP_API_URL
        };
    
        let defaultHeaders = {};
    
        defaultConfig.headers = defaultHeaders;
    
        const finalConfig = Object.assign(defaultConfig, config);
        return finalConfig;
    }
}

export default Api;
