"use strict";

const request = require('request-promise');
const configuration = require("../configurations/application.configuration");

function send(options) {
    return new Promise((resolve, reject) => {
        request(options)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = {
    get: (id) => {
        console.log(configuration.getApiCacheEndpoint());
        return new Promise((resolve, reject) => {
            let options = {
                method: 'GET',
                uri: `{getApiCacheEndpoint()}/${id}`,
                json: true
            };
            send(options)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
        });
    },

    set: (id, response, ttl) => {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                uri: `${configuration.getApiCacheEndpoint()}`,
                json: true,
                body: response
            };
            if (ttl !== undefined) options.qs = ttl;
            send(options)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
        });
    },

    del: (id) => {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'DELETE',
                uri: `${configuration.getApiCacheEndpoint()}/${id}`,
                json: true
            };
            send(options)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
}