import express from "express";

import {
  createClient,
  getAllClients,
  getSingleClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

// CREATE
router.post(
  "/",
  createClient
);

// GET ALL
router.get(
  "/",
  getAllClients
);

// GET SINGLE
router.get(
  "/:id",
  getSingleClient
);

// UPDATE
router.put(
  "/:id",
  updateClient
);

// DELETE
router.delete(
  "/:id",
  deleteClient
);

export default router;