const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
      default: null,
    },

    productName: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    unitPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  { _id: false }
);

const AddressSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [OrderItemSchema],

    shippingAddress: AddressSchema,

    billingAddress: AddressSchema,

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    taxAmount: {
      type: Number,
      default: 0,
    },

    shippingCharge: {
      type: Number,
      default: 0,
    },

    discountAmount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: [
        "COD",
        "UPI",
        "CARD",
        "NET_BANKING",
        "WALLET"
      ],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "PENDING",
        "PAID",
        "FAILED",
        "REFUNDED"
      ],
      default: "PENDING",
    },

    orderStatus: {
      type: String,
      enum: [
        "PLACED",
        "CONFIRMED",
        "PACKED",
        "SHIPPED",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "CANCELLED",
        "RETURNED"
      ],
      default: "PLACED",
    },

    trackingNumber: {
      type: String,
      default: "",
    },

    courierCompany: {
      type: String,
      default: "",
    },

    estimatedDeliveryDate: Date,

    deliveredAt: Date,

    cancelReason: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    couponCode: {
      type: String,
      default: "",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);