const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

//Rutas exigidas para la creación del CRUD
router.get('/add', moviesController.add);
router.post('/add', moviesController.create);
router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.update);
router.get('/delete/:id', moviesController.delete);
router.post('/delete/:id', moviesController.destroy);

module.exports = router;