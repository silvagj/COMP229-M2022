"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 *
 */
const express_1 = __importDefault(require("express"));
Object.defineProperty(exports, "__esModule", { value: true });
let app = (0, express_1.default)();
const button = document.getElementById('send');
button?.addEventListener('click', function send() {
    //save form information
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    app.get('/', function (req, res) {
        res.cookie('name', name).send('cookie set'); //Sets name = express
    });
    app.listen(3000);
    //redirect to homepage
    window.location.href = './home';
});
//# sourceMappingURL=app.js.map