module.exports = (sequelize, dataTypes) => {

    const alias = "Actores";
    const columnas = {
        id:{
            type: dataTypes.INTEGER,
            primeryKey: true,
            autoincrement: true
        },
        first_name:{
            type: dataTypes.STRING,
        },
        last_name:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.INTEGER,

        },
        favorite_movie_id:{
            type: dataTypes.INTEGER,
        },

    };
    const configuracion ={ 
        tableName: "actors",
        timestamps: false
    };
    
    
    const Actor = sequelize.define(alias, columnas, configuracion);

    Actor.associate = function(models){
       Actor.belongsToMany(models.Peliculas, {
            as:"peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }

    return Actor;

}