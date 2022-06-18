import express from 'express';

import Client from '../Models/client';

import { UserDisplayName } from '../Util';

export function DisplayClientList(req: express.Request, res: express.Response, next: express.NextFunction)
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