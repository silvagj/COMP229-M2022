"use strict";
/*
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 *
 */
//IIFE
const button = document.getElementById('send');
button?.addEventListener('click', function send() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    console.log('button clicked');
    console.log(name);
    console.log(email);
});
//# sourceMappingURL=app.js.map