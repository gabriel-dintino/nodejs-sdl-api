"use strict";

module.exports = (app) => {
    const applicationConfiguration = require("../configurations/application.configuration");
    const API_VERSION_1 = applicationConfiguration.getApiVersion1();
    const controller = require("../controllers/application.controller");
 
    app.get(`/sdl/${API_VERSION_1}/ping`, (req, res) => controller.pong(req, res));
    app.get(`/sdl/${API_VERSION_1}/line/:key`, (req, res) => controller.get(req, res));
    app.post(`/sdl/${API_VERSION_1}/line`, (req, res) => controller.set(req, res));
    app.delete(`/sdl/${API_VERSION_1}/line/:key`, (req, res) => controller.del(req, res));
};