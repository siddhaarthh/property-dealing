import { Schema, model, models } from "mongoose";

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    propertyImages: [
      {
        type: String,
        required: true,
      },
    ],

    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
        required: true,
      },
    ],

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

    floorPlanImages: [
      {
        type: String,
        required: true,
      },
    ],

    location: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
    },

    user: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      image: {
        type: String,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        ref: "User",
        required: true,
      },
      email: {
        type: String,
        ref: "User",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Property =
  models.Properties || model("Properties", propertySchema);
