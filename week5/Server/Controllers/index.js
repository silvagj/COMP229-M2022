"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = exports.DisplayContactsPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
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
/* Temporary */
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayMovieList(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection });
    });
}
exports.DisplayMovieList = DisplayMovieList;
//# sourceMappingURL=index.js.map