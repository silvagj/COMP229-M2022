"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = void 0;
// need passport functionality
const passport_1 = __importDefault(require("passport"));
// need to include the User model for authentication functions
const user_1 = __importDefault(require("../Models/user"));
// need to import the JWT Utility Function
const Util_1 = require("../Util");
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
            return res.json({ success: false, msg: 'ERROR: Authentication Failed' });
        }
        // no problems - we have a good username and password
        req.logIn(user, function (err) {
            // are there db errors?
            if (err) {
                console.error(err);
                res.end(err);
            }
            const authToken = (0, Util_1.GenerateToken)(user);
            return res.json({ success: true, msg: 'User Logged In Successfully!', user: {
                    id: user._id,
                    DisplayName: user.DisplayName,
                    username: user.username,
                    EmailAddress: user.EmailAddress
                }, token: authToken });
        });
        return;
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
            }
            else {
                console.error(err.name); // other error
            }
            return res.json({ success: false, msg: 'ERROR: Registration Failed!' });
        }
        // everything is ok - user has been registered
        return res.json({ success: true, msg: 'User Registered Successfully!' });
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
    res.json({ success: true, msg: 'User Logged Out Successfully!' });
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map