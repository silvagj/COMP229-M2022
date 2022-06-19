import express from 'express';
import { CallbackError } from 'mongoose';

import Client from '../Models/client';

import { UserDisplayName } from '../Util';

export function DisplayClientList(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
    Client.find(function(err, clientsCollection)
    {
        // Database error
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Client List', page: 'client-list', clients: clientsCollection, displayName: UserDisplayName(req) });
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
res.render('index', {title : 'Add', page: 'edit', client: '', displayName: UserDisplayName(req)})
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
let id = req.params.id;  // gets the parameter after the id in the route URL

// pass the id to the db and read the client into the edit page
Client.findById(id, {}, {}, function(err, clientToEdit) 
{
    if(err)
    {
        console.error(err);
        res.end(err); 
    }
    //show the edit view with the data of the client
    res.render('index', {title : 'Edit', page: 'edit', client: clientToEdit, displayName: UserDisplayName(req)});
});
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
// instantiate a new Client to add
let newClient = new Client
({
    "FirstName": req.body.firstName,
    "LastName": req.body.lastName,
    "Number": req.body.phoneNumber,
    "Email": req.body.emailAddress,
    "Company": req.body.company
});
//Insert the new Client object into the database
Client.create(newClient, function(err)
{
if(err)
{
    console.error(err);
    res.end(err);
}
// new client has been added
res.redirect('/client-list');
});
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
    let id = req.params.id;  // gets the parameter after the id in the route URL
    
    //Instantiate a new Client to edit

    let updatedClient = new Client
    ({  "_id": id,
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Number": req.body.phoneNumber,
        "Email": req.body.emailAddress,
        "Company": req.body.company
    });

    //update the client in the database
    Client.updateOne({_id: id}, updatedClient, function(err: ErrorCallback)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //successful edit - redirect to client-list
        res.redirect('/client-list');
    });

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
    let id = req.params.id; 
    
    //pass the id to the database and delete the Client

    Client.remove({_id: id}, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //delete successful
        res.redirect('/client-list');

    });
}
