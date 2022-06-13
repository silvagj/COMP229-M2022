"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//Import the controller module
const auth_1 = require("../Controllers/auth");
/* Display home page. */
router.get('/login', auth_1.DisplayLoginPage);
/* Display home page. */
router.get('/register', auth_1.DisplayRegisterPage);
/* Display projects page. */
router.get('/projects', auth_1.ProcessLoginPage);
/* Display services page. */
router.get('/services', auth_1.ProcessRegisterPage);
/* Display Contact page. */
router.get('/contact', auth_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map