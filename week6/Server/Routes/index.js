"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//Import the controller module
const index_1 = require("../Controllers/index");
/* Display home page. */
router.get('/', index_1.DisplayHomePage);
/* Display home page. */
router.get('/home', index_1.DisplayHomePage);
/* Display about page. */
router.get('/about', index_1.DisplayAboutPage);
/* Display projects page. */
router.get('/projects', index_1.DisplayProjectsPage);
/* Display services page. */
router.get('/services', index_1.DisplayServicesPage);
/* Display Contact page. */
router.get('/contact', index_1.DisplayContactPage);
exports.default = router;
//# sourceMappingURL=index.js.map