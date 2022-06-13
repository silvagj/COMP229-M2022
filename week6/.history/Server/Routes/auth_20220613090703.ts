import express from 'express';
const router = express.Router();

//Import the controller module
import {DisplayAboutPage, DisplayContactsPage, DisplayHomePage, DisplayProjectPage, DisplayServicePage} from "../Controllers/auth";

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


export default router;
