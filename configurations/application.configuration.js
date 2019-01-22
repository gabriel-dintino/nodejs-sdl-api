"use strict";

module.exports = {
    getApiVersion1: () => "V1",
    getApplicationUrl: () => process.env.NODEJS_SDL_API_SERVER_URL || "127.0.0.1",
    getApplicationPort: () => process.env.NODEJS_SDL_API_SERVER_PORT || 3000,
    getApiCacheURL: () => process.env.NODEJS_API_CACHE_SERVER_URL || "127.0.0.1",
    getApiCachePort: () => process.env.NODEJS_API_CACHE_SERVER_PORT || 8080,
    getApiCacheVersion: () => process.env.NODEJS_API_CACHE_VERSION || "V1",
    getApiCacheEndpoint: () => {
        if (process.env.NODEJS_API_CACHE_SERVER_URL) {
            if (process.env.NODEJS_API_CACHE_SERVER_PORT) {
                return `${process.env.NODEJS_API_CACHE_SERVER_URL}:${process.env.NODEJS_API_CACHE_SERVER_PORT}/cache/${process.env.NODEJS_API_CACHE_VERSION}/item`;
            } else {
                return `${process.env.NODEJS_API_CACHE_SERVER_URL}/cache/${process.env.NODEJS_API_CACHE_VERSION}/item`;
            }
        } else {
            return `${process.env.NODEJS_API_CACHE_SERVER_URL || "127.0.0.1"}:${process.env.NODEJS_API_CACHE_SERVER_PORT || 8080}/cache/${process.env.NODEJS_API_CACHE_VERSION || "V1"}/item`;
        }
    }
}