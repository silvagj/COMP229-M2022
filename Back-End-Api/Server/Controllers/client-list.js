"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayClientListPage = void 0;
// import the Client Model
const client_1 = __importDefault(require("../Models/client"));
function DisplayClientListPage(req, res, next) {
    client_1.default.find(function (err, clientsCollection) {
        // Database error
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        // res.render('index', { title: 'Client List', page: 'client-list', clients: clientsCollection, displayName:  UserDisplayName(req)  });
        res.json({ success: true, msg: 'Client-List Displayed Successfully', clients: clientsCollection, user: req.user });
    }).sort({ FirstName: 1 });
}
exports.DisplayClientListPage = DisplayClientListPage;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, msg: 'Add Page Displayed Successfully!' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    // pass the id to the db and read the client into the edit page
    client_1.default.findById(id, {}, {}, function (err, clientToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // show the edit view with the data
        res.json({ success: true, msg: 'Edit Page Displayed Successfully', client: clientToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    // instantiate a new Client to Add
    let newClient = new client_1.default({
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Number": req.body.phoneNumber,
        "Email": req.body.emailAddress,
        "Company": req.body.company,
        "Description": req.body.description
    });
    // Insert the new Client object into the database (clients collection)
    client_1.default.create(newClient, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // new client has been added -> refresh the client-list
        res.json({ success: true, msg: 'Successfully Added Client', client: newClient });
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    // instantiate a new Client to Edit
    let updatedClient = new client_1.default({
        "_id": id,
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Number": req.body.phoneNumber,
        "Email": req.body.emailAddress,
        "Company": req.body.company,
        "Description": req.body.description
    });
    // update the client in the database
    client_1.default.updateOne({ _id: id }, updatedClient, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // edit was successful -> go to the client-list page
        res.json({ success: true, msg: 'Successfully Edited Client', client: updatedClient });
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    // pass the id to the database and delete the client
    client_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // delete was successful
        res.json({ success: true, msg: 'Successfully Deleted Client' });
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=client-list.js.map