import express from 'express';
import { CallbackError } from 'mongoose';

// import the Client Model
import Client from '../Models/client';

import { UserDisplayName  } from '../Util';

export function DisplayClientListPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Client.find(function(err, clientsCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Client List', page: 'client-list', clients: clientsCollection, displayName:  UserDisplayName(req)  });
    }).sort({FirstName:1});
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  res.render('index', { title: 'Add', page: 'edit', clientlist: '', displayName:  UserDisplayName(req) })
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the db and read the client into the edit page
  Client.findById(id, {}, {}, function(err, clientToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', clientlist: clientToEdit, displayName:  UserDisplayName(req) })
  });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  // instantiate a new Client to Add
  let newClient = new Client
  ({
    "FirstName": req.body.firstName,
    "LastName": req.body.lastName,
    "Number": req.body.phoneNumber,
    "Email": req.body.emailAddress,
    "Company": req.body.company,
    "Description": req.body.description
  });

  // Insert the new Client object into the database (movies collection)
  Client.create(newClient, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new client has been added -> refresh the client-list
    res.redirect('/client-list');
  })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // instantiate a new Client to Edit
  let updatedClient = new Client
  ({
    "_id": id,
    "FirstName": req.body.firstName,
    "LastName": req.body.lastName,
    "Number": req.body.phoneNumber,
    "Email": req.body.emailAddress,
    "Company": req.body.company,
    "Description": req.body.description
  });

  // update the client in the database
  Client.updateOne({_id: id}, updatedClient, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful -> go to the client-list page
    res.redirect('/client-list');
  });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the database and delete the client
  Client.remove({_id: id}, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // delete was successful
    res.redirect('/client-list');
  });
}