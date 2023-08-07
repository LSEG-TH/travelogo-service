import express from 'express';
import middlewareSecurity from './middlewareSecurity';
import middlewareParser from './middlewareParser';
const router = express.Router();

router.use('*', middlewareParser);
router.use('/api', middlewareSecurity);
export default router;
