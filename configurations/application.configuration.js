"use strict";

module.exports = {
    getApiVersion1: () => "V1",
    getApplicationUrl: () => process.env.NODEJS_SDL_API_SERVER_URL || "127.0.0.1",
    getApplicationPort: () => process.env.NODEJS_SDL_API_SERVER_PORT || 3000,
    getApiCacheEndpoint: () => process.env.NODEJS_API_CACHE_ENDPOINT || "http://localhost:8080/cache/V1/items"
}