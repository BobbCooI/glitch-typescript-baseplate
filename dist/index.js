"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((_req, _res, next) => { next(); }, cors_1.default({ maxAge: 84600 }));
app.use('/api', require('./api'));
app.get('/', (_req, res) => {
    console.log(process.env);
    res.send('Hello world!');
});
console.log(process.env);
app.listen(process.env.PORT, () => {
    console.log("❇️ Express server is running on port", process.env.PORT);
});
//# sourceMappingURL=index.js.map