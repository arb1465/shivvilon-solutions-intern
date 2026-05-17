import express from "express";

import {
  upsertInventory,
  getAllInventories,
  getSingleInventory,
  deleteInventory,
  deleteProperty,
} from "../controllers/inventoryController.js";

const router = express.Router();

// CREATE / APPEND PROPERTY
router.post(
  "/upsert",
  upsertInventory
);
 
// GET ALL
router.get(
  "/",
  getAllInventories
);

// GET SINGLE
router.get(
  "/:id",
  getSingleInventory
);

// DELETE INVENTORY
router.delete(
  "/:id",
  deleteInventory
);

// DELETE PROPERTY
router.delete(
  "/:inventoryId/property/:propertyId",
  deleteProperty
);

export default router;