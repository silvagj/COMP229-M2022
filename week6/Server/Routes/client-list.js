"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const client_list_1 = require("../Controllers/client-list");
/* Display Client List PAge */
router.get('/client-list', Util_1.AuthGuard, client_list_1.DisplayClientList);
/* Display Add PAge */
router.get('/add', Util_1.AuthGuard, client_list_1.DisplayAddPage);
/* Display Edit Page */
router.get('/edit/:id', Util_1.AuthGuard, client_list_1.DisplayEditPage);
/* Process Add Page */
router.post('/add', Util_1.AuthGuard, client_list_1.ProcessAddPage);
/* Process Edit Page */
router.post('/edit/:id', Util_1.AuthGuard, client_list_1.ProcessEditPage);
/* Process Delete Page */
router.get('/delete/:id', Util_1.AuthGuard, client_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=client-list.js.map