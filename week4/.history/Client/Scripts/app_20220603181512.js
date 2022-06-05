"use strict";
/*
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 *
 */
const button = document.getElementById('send');
button?.addEventListener('click', function send() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    window.location.href = './home';
    console.log('Information saved');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Subject: ' + subject);
    console.log('Message: ' + message);
});
//# sourceMappingURL=app.js.map