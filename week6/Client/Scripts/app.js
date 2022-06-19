"use strict";
/*
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  16-Jun-2022
 *
 */
const button = document.getElementById('send');
button?.addEventListener('click', function send() {
    //capture form information
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    //redirect to homepage
    window.location.href = './home';
});
$("a.delete").on("click", function (event) {
    if (!confirm("Are you sure?")) {
        event.preventDefault();
        location.href = "/client-list";
    }
});
//# sourceMappingURL=app.js.map