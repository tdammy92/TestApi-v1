"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const port = process.env.PORT || 5000;
const server = (0, express_1.default)();
server.get('/api/feeds/following', (req, res) => {
    res.send(data_1.Feeds);
});
server.get('/api/feeds/for-you', (req, res) => {
    res.send(data_1.Feeds.reverse());
});
server.listen(port, () => {
    // console.log("APP ENVIREMOENT", process.argv);
    console.log(`server runing on port ${port}`);
    // console.log(`server runing on port http://localhost:${port}/api`);
});
