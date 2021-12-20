const db = require ('../database/models');
const Actores = require ('../database/models/Actor.js');

const actorsController={
    list: function(req, res){
        Actores.findAll()
        .then(function(Actores){
            res.render("actorsList", {actores:actores})
        })

    },
    detail: function(req, res){
        Actores.findByPk(req.params.id)
        .then(function(actor){
            res.render("actorDetail", {actor:actor})
        })

    },
        
}


module.exports=actorsController