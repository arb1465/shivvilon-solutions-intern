import express from "express";

import {
  createQuotation,
  getAllQuotations,
  getSingleQuotation,
  updateQuotation,
  deleteQuotation,
} from "../controllers/quotationController.js";

const router = express.Router();

// CREATE
router.post(
  "/",
  createQuotation
);

// GET ALL
router.get(
  "/",
  getAllQuotations
);

// GET SINGLE
router.get(
  "/:id",
  getSingleQuotation
);

// UPDATE
router.put(
  "/:id",
  updateQuotation
);

// DELETE
router.delete(
  "/:id",
  deleteQuotation
);

export default router;