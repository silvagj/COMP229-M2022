"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import the controller module
const auth_1 = require("../Controllers/auth");
/* Display Login page. */
router.get('/login', auth_1.DisplayLoginPage);
/* Display Register page. */
router.get('/register', auth_1.DisplayRegisterPage);
/* Process Login page. */
router.post('/login', auth_1.ProcessLoginPage);
/* Process Register page. */
router.post('/register', auth_1.ProcessRegisterPage);
/* Process Logout page. */
router.get('/logout', auth_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map