"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
router.use('/', (_req, _res, next) => {
    console.log("api request received!");
    next();
});
router.get('/', (_req, res) => {
    return res.send("why u here?");
});
router.use('/hi', require('./hi'));
module.exports = router;
//# sourceMappingURL=index.js.map