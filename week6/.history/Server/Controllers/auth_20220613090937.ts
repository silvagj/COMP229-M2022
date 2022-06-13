import express from 'express';

export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'About Us', page: 'about' });
  }

  export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'My Projects', page: 'projects' });
  }

  export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Services', page: 'services' });
  }

  export function DisplayContactsPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Contact', page: 'contact' });
  }

 