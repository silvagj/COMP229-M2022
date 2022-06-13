"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayContactsPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}
exports.DisplayContactsPage = DisplayContactsPage;
//# sourceMappingURL=index.js.map