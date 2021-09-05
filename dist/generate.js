"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const prompts_1 = require("./prompts");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const listr_1 = __importDefault(require("listr"));
const projectDir = path_1.default.resolve(process.cwd());
async function generate() {
    const { appName, appUrl } = await (0, prompts_1.getPrompts)();
    const tasks = new listr_1.default([
        {
            title: 'Updating import map json',
            task: () => {
                const json = JSON.parse(fs.readFileSync(path_1.default.resolve(projectDir, 'importmap.json')).toString());
                if (json.imports) {
                    json.imports[appName] = appUrl;
                }
                fs.writeFileSync(path_1.default.resolve(projectDir, 'importmap.json'), JSON.stringify(json, null, 2));
            }
        }
    ]);
    tasks.run().catch((err) => {
        console.error(err);
    });
}
exports.generate = generate;
