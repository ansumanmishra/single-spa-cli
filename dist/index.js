"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listr_1 = __importDefault(require("listr"));
const generate_1 = require("./generate");
const tasks = new listr_1.default([
    {
        title: 'Run tests',
        task: () => console.log('hi')
    }
]);
(0, generate_1.generate)();
// tasks.run().catch( (err: any) => {
//     console.error(err);
// });
