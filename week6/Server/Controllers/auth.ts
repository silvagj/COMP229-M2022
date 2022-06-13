import express from 'express';

//need passport functionality
import passport from 'passport'
//Include the User model for authentication function
import User from '../Models/user';

export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('loginMessage'), displayName: '' });
  }

  export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'My Projects', page: 'projects' });
  }

  export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Services', page: 'services' });
  }

  export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Contact', page: 'contact' });
  }

 