"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// import db package
const mongoose_1 = __importDefault(require("mongoose"));
// Step 1 for auth - import modules
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const connect_flash_1 = __importDefault(require("connect-flash"));
// modules for JWT support
const cors_1 = __importDefault(require("cors"));
// Step 2 for auth - define our auth objects
let localStrategy = passport_local_1.default.Strategy; // alias
// Step 3 for auth - import the user model
const user_1 = __importDefault(require("../Models/user"));
// import the router data
const index_1 = __importDefault(require("../Routes/index")); // top-level routes
const client_list_1 = __importDefault(require("../Routes/client-list")); //client-list routes
const movie_list_1 = __importDefault(require("../Routes/movie-list")); // movie-list routes
const auth_1 = __importDefault(require("../Routes/auth")); // authentication routes
const app = (0, express_1.default)();
// Complete the DB Configuration
const DBConfig = __importStar(require("./db"));
mongoose_1.default.connect(DBConfig.RemoteURI);
const db = mongoose_1.default.connection; // alias for the mongoose connection
// Listen for Connections or Errors
db.on("open", function () {
    console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});
db.on("error", function () {
    console.error(`Connection Error`);
});
// view engine setup
app.set('views', path_1.default.join(__dirname, '../Views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../Client')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../node_modules')));
app.use((0, cors_1.default)()); // adds CORS (cross-origin resource sharing) to the config
// Step 4 - for auth - setup express session
app.use((0, express_session_1.default)({
    secret: DBConfig.Secret,
    saveUninitialized: false,
    resave: false
}));
// Step 5 - setup Flash
app.use((0, connect_flash_1.default)());
// Step 6 - initialize passport and session
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Step 7 - implement the Auth Strategy
passport_1.default.use(user_1.default.createStrategy());
// Step 8 - setup User serialization and deserialization (encoding and decoding)
passport_1.default.serializeUser(user_1.default.serializeUser());
passport_1.default.deserializeUser(user_1.default.deserializeUser());
// use routes
app.use('/', index_1.default);
app.use('/', client_list_1.default);
app.use('/', movie_list_1.default);
app.use('/', auth_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
//# sourceMappingURL=app.js.map