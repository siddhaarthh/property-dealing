import { Schema, model, models } from "mongoose";

const propertySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  details: {
    builtUpArea: {
      type: String,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    builtYear: {
      type: Number,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    balcony: {
      type: Number,
      required: true,
    },
    propertyCategory: {
      type: String,
      required: true,
    },
    carpetArea: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },

  floorPlanImages: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export const Property =
  models.Properties || model("Properties", propertySchema);
