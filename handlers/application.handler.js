"use strict";

const cache = require("../models/application.model");

module.exports = {
    ping: (req, res) => res.status(200).json("pong"),
    get: async (req, res) => {
        let {key} = req.params;
        let item = await cache.get(key);
        res.status(200).json(item);
    },
    set: async (req, res) => {
        res.status(200).json("SET method has been called.");
    },
    del: (req, res) => {
        res.status(200).json("DELETE method has been called.");
    }
}