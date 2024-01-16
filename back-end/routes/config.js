import express from 'express';

import { router as alimenteRouter } from './alimente.js';
import { router as collectionsRouter } from "./collections.js";
import { router as personsRouter } from "./persons.js";

export const router = express.Router();

router.use("/alimente", alimenteRouter);
router.use("/collections", collectionsRouter);
router.use("/persons", personsRouter);