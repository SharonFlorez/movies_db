const db = require ('../database/models');
const Generos = require ('../database/models/Genero.js');

const genresController={
    list: function(req, res){
        Generos.findAll()
        .then(function(generos){
            res.render("genresList", {generos:generos})
        })

    },
    detail: function(req, res){
        Generos.findByPk(req.params.id)
        .then(function(genero){
            res.render("genresDetail", {genero:genero})
        })

    },
    
}

module.exports=genresController

