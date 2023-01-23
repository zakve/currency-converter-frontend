import { IConvertParams } from "../models/Convert";

const BACKEND_API_URL = 'http://localhost:3000';

const methods = {
    get: 'GET',
    post: 'POST'
}

const contentTypes = {
    json: "application/json",
    formData: "form-data",
    searchParams: "search-parameters",
    fileDownload: "file-download",
};

const endpoints = {
    health: {
        method: methods.get,
        path: `${BACKEND_API_URL}/health`,
    },
    currencies: {
        method: methods.get,
        path: `${BACKEND_API_URL}/currencies`
    },
    latest: {
        method: methods.get,
        path: `${BACKEND_API_URL}/latest`
    },
    convert: {
        method: methods.post,
        path: `${BACKEND_API_URL}/convert`,
        contentType: contentTypes.json
    },
    stats: {
        method: methods.get,
        path: `${BACKEND_API_URL}/stats`
    },
}

const ApiService = {
    getHealth: async () => {
        try {
            const responseData = await fetch(endpoints.health.path);
            return responseData;
        } catch (error) {
            const e = error as Error;
            console.error(e);
            throw new Error(e.message);
        }
    },
    getCurrencies: async () => {
        try {
            const response = await fetch(endpoints.currencies.path);
            const data = await response.json();
            return data;
        } catch (error) {
            const e = error as Error;
            console.error(e);
            throw new Error(e.message);
        }
    },
    getLatest: async () => {
        try {
            const response = await fetch(endpoints.latest.path);
            const data = await response.json();
            return data;
        } catch (error) {
            const e = error as Error;
            console.error(e);
            throw new Error(e.message);
        }
    },
    getStats: async () => {
        try {
            const response = await fetch(endpoints.stats.path);
            const data = await response.json();
            return data;
        } catch (error) {
            const e = error as Error;
            console.error(e);
            throw new Error(e.message);
        }
    },
    convert: async ({ amount, to }: IConvertParams) => {
        try {
            const response = await fetch(endpoints.convert.path, {
                method: methods.post,
                body: JSON.stringify({ amount, to }),
                headers: { 'Content-Type': endpoints.convert.contentType },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            const e = error as Error;
            console.error(e);
            throw new Error(e.message);
        }
    },
};

export default ApiService