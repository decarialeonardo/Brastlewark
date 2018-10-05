"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const api_1 = require("./api");
const basePath = '/gnomos';
const server = express();
exports.server = server;
server.disable('x-powered-by');
// Enable cookie parsing
server.use(cookieParser());
server.use(function (err, req, res, next) {
    console.log(err);
    next();
});
// Mount an API application if you need
server.use(basePath + '/api', api_1.default);
