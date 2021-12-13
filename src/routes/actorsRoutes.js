const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/actorsController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);



module.exports = router;