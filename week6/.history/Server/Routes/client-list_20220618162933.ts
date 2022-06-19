import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util/index';

import { DisplayAddPage, DisplayClientList, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/client-list';
/* Display Client List PAge */

router.get('/client-list', AuthGuard, DisplayClientList);

/* Display Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

/* Display Edit Page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* Process Add Page */
router.post('/add', AuthGuard, ProcessAddPage);

/* Process Edit Page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Process Delete Page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;