const db = require ('./database/models/Actores.js');

const actorsController={
    list: function(req, res){
        db.Actores.findAll()
        .then(function(Actores){
            res.render("actorsList", {actores:actores})
        })

    },
    detail: function(req, res){
        db.Actores.findByPk(req.params.id)
        .then(function(actor){
            res.render("actorDetail", {actor:actor})
        })

    },
        
}


