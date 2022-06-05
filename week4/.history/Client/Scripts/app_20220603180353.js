/*  
 *    Filename: app.js
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 * 
 */

"use strict";
//IIFE
"use strict";
const button = document.getElementById('btn');

button?.addEventListener('click', function send() {
  let name =(document.getElementById('name') as HTMLInputElement).value
  let email =(document.getElementById('email') as HTMLInputElement).value
  let subject =(document.getElementById('subject') as HTMLInputElement).value
  let message =(document.getElementById('message') as HTMLInputElement).value
  
    console.log('button clicked');
  console.log(name);
  console.log(email);
});
//# sourceMappingURL=app.js.map