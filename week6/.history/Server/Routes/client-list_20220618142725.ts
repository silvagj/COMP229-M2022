import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayClientList } from '../Controllers/client-list';
/* Display Client List PAge */

router.get('/client-list', AuthGuard, DisplayClientList);

/* Display Client List PAge */
export default router;