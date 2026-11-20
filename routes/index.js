const express = require('express');
const { Listing, categories } = require('../models/listing');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 }).lean();
    res.render('index', { listings });
  } catch (error) {
    next(error);
  }
});

router.get('/listings/new', (req, res) => {
  res.render('new-listing', { categories, values: {}, errors: [] });
});

router.post('/listings', async (req, res, next) => {
  const values = {};

  for (const field of ['name', 'category', 'pickup', 'description']) {
    const input = req.body[field];
    values[field] = typeof input === 'string' ? input.trim() : '';
  }

  try {
    await Listing.create(values);
    res.redirect(303, '/');
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((issue) => issue.message);
      return res.status(422).render('new-listing', { categories, values, errors });
    }

    next(error);
  }
});

module.exports = router;