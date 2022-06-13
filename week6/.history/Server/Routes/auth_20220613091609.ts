import express from 'express';
const router = express.Router();

//Import the controller module
import {DisplayAboutPage, DisplayContactsPage, DisplayHomePage, ProcessLoginPage, DisplayServicePage, DisplayLoginPage, DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage} from "../Controllers/auth";

/* Display home page. */
router.get('/', DisplayLoginPage);

/* Display home page. */
router.get('/home', DisplayRegisterPage);


/* Display projects page. */
router.get('/projects', ProcessLoginPage);

/* Display services page. */
router.get('/services', ProcessRegisterPage);

/* Display Contact page. */
router.get('/contact', ProcessLogoutPage);


export default router;
