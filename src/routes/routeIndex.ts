import express from 'express';
import routeRedirect from './routeRedirect';
const router = express.Router();

/**
 * Setting up API Prefix
 */
const API_VERSION = process.env.API_VERSION;

//TODO: Add routing based on requirement

/**
 * Mandatory Router, It must be at the bottom most.
 */
router.use('/*', routeRedirect);

export default router;