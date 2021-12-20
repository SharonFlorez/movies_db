const db = require ('../database/models');
const Peliculas = require ('../database/models/Pelicula.js');
const Generos = require ('../database/models/Genero.js');



const moviesController={
    list: function(req, res){
        Peliculas.findAll({
            include: [{association: "generos"}, { association: "actores"}]
        })
        .then(function(peliculas){
            res.render("moviesList", {peliculas:peliculas})
        })

    },
    detail: function(req, res){
        Peliculas.findByPk(req.params.id, {
            include: [{association: "generos"}, { association: "actores"}]
        })
        .then(function(pelicula){
            res.render("moviesDetail", {pelicula:pelicula})
        })

    },
    new: function(req, res){
        Peliculas.findAll({
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(function(peliculas){
            res.render("newestMovies", {peliculas:peliculas})
        })
    },

    recomended: function(req, res){
        Peliculas.findAll({
            order: [
                ['release_date', 'DESC']
            ],         
            limit: 5            
        })
        .then(function(peliculas){
            res.render("recommendedMovies", {peliculas:peliculas})
        })
    },
    
    
    //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        Generos.findAll()
        .then(function(generos){
            return res.render("moviesAdd", {generos:generos});

        })
        
    },
    create: function (req, res) {
        Peliculas.create({
           title: req.body.title,
           rating: req.body.rating,
           awards: req.body.awards,
           release_date: req.body.release_date,
           length: req.body.length,
           genre_id: req.body.genero 
       });
       res.redirect("/moviesList")
    },

    edit: function(req, res) {

        const pedidoPelicula= db.Peliculas.findByPk(req.params.id)
        const pedidoGenero = db.Peliculas.findAll()

        Promise.all([pedidoPelicula,pedidoGenero])
        .then(function([pelicula, generos]){
            res.render("moviesEdit", {pelicula:pelicula, generos:generos})
        })
    },

    update: function (req,res) {
        Peliculas.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genero
        }, {
            where: {
                id: req.params.id
            }
        })
        // res.redirect("/movies/edit/" + req.params.id)
        res.redirect("/moviesList")
    },

    delete: function (req, res) {
        Peliculas.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("moviesDelete", {pelicula:pelicula})
        })
    },
    destroy: function (req, res) {
        Peliculas.destroy({
            where: {
               id: req.params.id 
            }
        })
        res.redirect("/moviesList")
    }
    
}


module.exports=moviesController