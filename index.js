"use strict";

const express = require('express');
const bodyParser = require("body-parser");
const application = express();
const applicationConfiguration = require("./configurations/application.configuration");

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json({ type: 'applicationlication/json' }));

require("./routes/application.route")(application);

let port = applicationConfiguration.getApplicationPort();
application.listen(port, () => console.log(`Server listening on port ${port}`))