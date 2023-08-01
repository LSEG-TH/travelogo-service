import express from 'express';
import { getRedirect } from '../controllers/controllerRedirect';

const router = express.Router();
router.get('/*', getRedirect);

export default router;
