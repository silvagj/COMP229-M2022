"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* Display home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* Display home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* Display about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
});
/* Display projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
});
/* Display services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
/* Display Contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
});
exports.default = router;
//# sourceMappingURL=index.js.map