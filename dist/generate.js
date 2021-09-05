"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const prompts_1 = require("./prompts");
async function generate() {
    const prompts = await (0, prompts_1.getPrompts)();
    console.log(prompts);
}
exports.generate = generate;
