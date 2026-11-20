const mongoose = require('mongoose');

const categories = ['Electronics', 'School supplies', 'Recreation', 'Other'];

const listingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    category: { type: String, required: true, enum: categories },
    pickup: { type: String, required: true, trim: true, maxlength: 80 },
    description: { type: String, required: true, trim: true, maxlength: 300 }
  },
  { timestamps: true }
);

module.exports = {
  Listing: mongoose.model('Listing', listingSchema),
  categories
};