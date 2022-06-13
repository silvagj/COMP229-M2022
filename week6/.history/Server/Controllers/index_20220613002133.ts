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

  import Movie from '../Models/movie';
  export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    Movie.find(function(err, moviesCollection)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection});

    });
  }