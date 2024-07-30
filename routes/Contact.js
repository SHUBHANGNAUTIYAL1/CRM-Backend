import express from "express";
import {
  createContact,
  getContacts,
  deleteContactById,
} from "../controllers/ContactController.js"

const router = express.Router();

router.post("/create", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContactById);

export default router;
