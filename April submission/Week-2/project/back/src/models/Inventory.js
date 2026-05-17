import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyId: {
      type: String,
      required: true,
    },

    thickness: {
      type: String,
      required: true,
    },

    weight: String,

    height: String,

    lengthOfInventory: String,

    quantity: {
      type: Number,
      default: 0,
    },

    minQuantity: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["NORMAL", "LOW", "OUT_OF_STOCK"],
      default: "NORMAL",
    },

    dateOfProperty: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const inventorySchema = new mongoose.Schema(
  {
    inventoryId: {
      type: String,
      required: true,
      unique: true,
    },

    inventoryName: {
      type: String,
      required: true,
      unique: true,
    },

    dateOfInventory: {
      type: Date,
      default: Date.now,
    },

    properties: [propertySchema],
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model(
  "Inventory",
  inventorySchema
);

export default Inventory;