const db = require ('./database/models/Peliculas.js');

const moviesController={
    list: function(req, res){
        db.Peliculas.findAll()
        .then(function(peliculas){
            res.render("moviesList", {peliculas:peliculas})
        })

    },
    detail: function(req, res){
        db.Peliculas.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("moviesDetail", {pelicula:pelicula})
        })

    },
    new: function(req, res){
        db.Peliculas.findAll({
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(function(peliculas){
            res.render("newestMovies", {peliculas:peliculas})
        })
    },

    recomended: function(req, res){
        db.Peliculas.findAll({
            order: [
                ['release_date', 'DESC']
            ],         
            limit: 5            
        })
        .then(function(peliculas){
            res.render("recommendedMovies", {peliculas:peliculas})
        })
    },
    
}


