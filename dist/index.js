"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    let helloWorld = 'Hello motherFucker!!!!';
    res.send(helloWorld);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
