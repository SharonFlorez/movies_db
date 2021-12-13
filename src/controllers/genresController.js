const db = require ('./database/models/Generos.js');

const moviesController={
    list: function(req, res){
        db.Generos.findAll()
        .then(function(generos){
            res.render("genresList", {generos:generos})
        })

    },
    detail: function(req, res){
        db.Generos.findByPk(req.params.id)
        .then(function(genero){
            res.render("genresDetail", {genero:genero})
        })

    },
    
}
    

