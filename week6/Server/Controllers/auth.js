"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = void 0;
// need passport functionality
const passport_1 = __importDefault(require("passport"));
// need to include the User model for authentication functions
const user_1 = __importDefault(require("../Models/user"));
// import the DisplayName Utility method
const Util_1 = require("../Util");
// Display Functions
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: (0, Util_1.UserDisplayName)(req) });
    }
    return res.redirect('/client-list');
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: (0, Util_1.UserDisplayName)(req) });
    }
    return res.redirect('/client-list');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
// Processing Functions
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        // are there server errors?
        if (err) {
            console.error(err);
            res.end(err);
        }
        // are there login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }
        // no problems - we have a good username and password
        req.logIn(user, function (err) {
            // are there db errors?
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/client-list');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegisterPage(req, res, next) {
    // instantiate a new user object
    let newUser = new user_1.default({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error!');
            }
            else {
                console.error(err.name); // other error
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/register');
        }
        // everything is ok - user has been registered
        // automatically login the user
        return passport_1.default.authenticate('local')(req, res, function () {
            return res.redirect('/client-list');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User Logged Out");
    });
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map