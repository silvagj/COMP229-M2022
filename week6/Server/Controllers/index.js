"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects', displayName: '' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: '' });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayContactsPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: '' });
}
exports.DisplayContactsPage = DisplayContactsPage;
//# sourceMappingURL=index.js.map