import express from 'express';
const router = express.Router();

//Import the controller module
import {DisplayAboutPage, DisplayContactsPage, DisplayHomePage, DisplayMovieList, DisplayProjectPage, DisplayServicePage} from "../Controllers/index";

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectPage);

/* Display services page. */
router.get('/services', DisplayServicePage);

/* Display Contact page. */
router.get('/contact', DisplayContactsPage);

/* Temporary */
router.get('/movie-list', DisplayMovieList);

export default router;
