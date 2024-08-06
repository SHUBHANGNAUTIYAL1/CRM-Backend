import express from "express";

import { createPop, deletePopById, getPop } from "../controllers/PopController.js";

const router = express.Router();

router.post("/create", createPop);
router.get("/", getPop);
router.delete("/:id", deletePopById);

export default router;