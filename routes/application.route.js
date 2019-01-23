"use strict";

const applicationConfiguration = require("../configurations/application.configuration");
const API_VERSION_1 = applicationConfiguration.getApiVersion1();
const controller = require("../controllers/application.controller");

module.exports = (app) => {
    app.get(`/sdl/${API_VERSION_1}/ping`, (req, res) => controller.pong(req, res));
    app.get(`/sdl/${API_VERSION_1}/lines/:key`, (req, res) => controller.get(req, res));
    app.post(`/sdl/${API_VERSION_1}/lines`, (req, res) => controller.set(req, res));
    app.delete(`/sdl/${API_VERSION_1}/lines/:key`, (req, res) => controller.del(req, res));
}