import express from 'express';

import Client from '../Models/client';

import { UserDisplayName } from '../Util';

export function DisplayClientList(req: express.Request, res: express.Response, next: express.NextFunction) : void
{
    Client.find(function(err, clientsCollection)
    {
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

}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{

}
