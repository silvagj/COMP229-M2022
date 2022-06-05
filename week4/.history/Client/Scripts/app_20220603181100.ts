/*  
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 * 
 */

    const button = document.getElementById('send');

    button?.addEventListener('click', function send() {
      let name =(document.getElementById('name') as HTMLInputElement).value
      let email =(document.getElementById('email') as HTMLInputElement).value
      let subject =(document.getElementById('subject') as HTMLInputElement).value
      let message =(document.getElementById('message') as HTMLInputElement).value
      
        console.log('Information saved');

      console.log('Name: ' + name);
      console.log('Email: ' + email);
      console.log('Subject: ' + subject);
      console.log('Message: ' + message);
    });