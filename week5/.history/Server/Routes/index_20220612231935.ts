import express from 'express';
const router = express.Router();

//Import the controller model
import {DisplayHomePage} from "../Controllers/index";
/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Us', page: 'about' });
});

/* Display projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'My Projects', page: 'projects' });
});

/* Display services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services', page: 'services' });
});

/* Display Contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact', page: 'contact' });
});

export default router;
