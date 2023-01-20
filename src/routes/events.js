const express = require('express');
const router = express.Router(); 

const eventsController = require('../app/controllers/EventsController');

//newsController.index;

router.get('/events' , eventsController.show);

router.get('/', eventsController.index);

module.exports = router;