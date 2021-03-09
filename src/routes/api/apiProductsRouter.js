const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api/apiProductsController');

router.get('/latest', apiProductsController.latest);
router.get('/offers', apiProductsController.offers);

module.exports = router;