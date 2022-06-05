"use strict";
/*
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 *
 */
const button = document.getElementById('send');
//Creating an event listener for the send button in contact page 
button?.addEventListener('click', function send() {
    //save form information
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    //redirect to homepage
    window.location.href = './home';
});
//# sourceMappingURL=app.js.map