import express from 'express';
const router = express.Router();

import { DisplayAddPage, DisplayEditPage, DisplayClientListPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/client-list';

import { AuthGuard } from '../Util/index';

/* Display Client List Page */
router.get('/client-list',  DisplayClientListPage);

/* Display Add Page */
router.get('/add', DisplayAddPage);

/* Display Edit Page */
router.get('/edit/:id', DisplayEditPage);

/* Process Add Page */
router.post('/add', ProcessAddPage);

/* Process Edit Page */
router.post('/edit/:id', ProcessEditPage);

/* Process Delete Page */
router.get('/delete/:id', ProcessDeletePage);

export default router;