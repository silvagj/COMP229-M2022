"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_list_1 = require("../Controllers/client-list");
const index_1 = require("../Util/index");
/* Display Client List Page */
router.get('/client-list', client_list_1.DisplayClientListPage);
/* Display Add Page */
router.get('/add', index_1.AuthGuard, client_list_1.DisplayAddPage);
/* Display Edit Page */
router.get('/edit/:id', index_1.AuthGuard, client_list_1.DisplayEditPage);
/* Process Add Page */
router.post('/add', index_1.AuthGuard, client_list_1.ProcessAddPage);
/* Process Edit Page */
router.post('/edit/:id', index_1.AuthGuard, client_list_1.ProcessEditPage);
/* Process Delete Page */
router.get('/delete/:id', index_1.AuthGuard, client_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=client-list.js.map