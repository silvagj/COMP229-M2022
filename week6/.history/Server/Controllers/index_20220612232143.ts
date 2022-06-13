import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'About Us', page: 'about' });
  }

  export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'About Us', page: 'about' });
  }

  export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'About Us', page: 'about' });
  }

  export function DisplayContactsPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'About Us', page: 'about' });
  }