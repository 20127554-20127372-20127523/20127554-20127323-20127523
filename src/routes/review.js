const express = require('express');
const router = express.Router(); 

const reviewController = require('../app/controllers/ReviewController');


router.get('/review' , reviewController.show);

router.get('/', reviewController.index);

module.exports = router;