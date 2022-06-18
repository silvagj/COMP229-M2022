"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const client_list_1 = require("../Controllers/client-list");
router.get('/client-list', Util_1.AuthGuard, client_list_1.DisplayClientList);
exports.default = router;
//# sourceMappingURL=client-list.js.map