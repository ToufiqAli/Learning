const mongoose = require("mongoose");

const ProductImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },

    alt: {
      type: String,
      default: "",
    },

    isPrimary: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const VariantSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      maxlength: 250,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required:true,
      default: null,
    },

    subCategory: {
      type: String,
    },

    brand: {
      type: String,
      default: "Own Brand",
    },

    ageGroup: {
      type: String,
      enum: [
        "0-6 Months",
        "6-12 Months",
        "1-2 Years",
        "2-4 Years",
        "4-6 Years",
        "6-8 Years",
        "8-10 Years",
        "10-12 Years",
      ],
    },

    material: {
      type: String,
    },

    images: [ProductImageSchema],

    variants: [VariantSchema],

    currency: {
      type: String,
      default: "INR",
    },

    originalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    taxPercentage: {
      type: Number,
      default: 18,
    },

    costPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalSold: {
      type: Number,
      default: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    weight: {
      type: Number,
    },

    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },

    safetyCertification: {
      type: String,
    },

    tags: [String],

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "OUT_OF_STOCK", "DRAFT", "DISCONTINUED"],
      default: "ACTIVE",
    },

    seoTitle: String,

    seoDescription: String,

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);