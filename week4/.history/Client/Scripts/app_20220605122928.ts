/*  
 *    Filename: app.ts
 *    Student Name: Silvana Gjini
 *    Student ID:301201477
 *    Date:  2-Jun-2022
 * 
 */

    const button = document.getElementById('send');

    button?.addEventListener('click', function send() {
      //capture form information
      let name =(document.getElementById('name') as HTMLInputElement).value
      let email =(document.getElementById('email') as HTMLInputElement).value
      let phone =(document.getElementById('phone') as HTMLInputElement).value
      let message =(document.getElementById('message') as HTMLInputElement).value
      //redirect to homepage
      window.location.href = './home';
    });