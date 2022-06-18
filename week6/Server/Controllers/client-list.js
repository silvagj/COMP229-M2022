"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayClientList = void 0;
const client_1 = __importDefault(require("../Models/client"));
const Util_1 = require("../Util");
function DisplayClientList(req, res, next) {
    client_1.default.find(function (err, clientsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Client List', page: 'client-list', clients: clientsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayClientList = DisplayClientList;
function DisplayAddPage(req, res, next) {
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=client-list.js.map