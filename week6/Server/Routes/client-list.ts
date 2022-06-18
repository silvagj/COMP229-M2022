import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayClientList } from '../Controllers/client-list';

router.get('/client-list', AuthGuard, DisplayClientList);

export default router;