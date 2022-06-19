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
let id = req.params.id;  // gets the parameter a
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
