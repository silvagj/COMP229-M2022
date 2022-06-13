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

  /* Temporary */

  export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    
  }