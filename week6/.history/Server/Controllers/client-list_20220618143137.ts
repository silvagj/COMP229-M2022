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

}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) : void
{

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
