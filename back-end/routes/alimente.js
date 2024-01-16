import express from 'express';
import * as alimenteController from "../controllers/alimente.js";

export const router = express.Router();

// rute get
router.get("/", alimenteController.getAlimente);
router.get("/:id", alimenteController.getById);

// rute post
router.post("/", alimenteController.create);

// rute patch
router.patch("/", alimenteController.update);

// rute delete
router.delete("/:id", alimenteController.remove);
