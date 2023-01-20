const express = require('express');
const router = express.Router(); 

const menuController = require('../app/controllers/MenuController');

//newsController.index;

router.get('/menu' , menuController.show);

router.get('/', menuController.index);

module.exports = router;