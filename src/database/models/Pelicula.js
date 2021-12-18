module.exports = (sequelize, dataTypes) => {

    const alias = "Peliculas";
    const columnas = {
        id:{
            type: dataTypes.INTEGER,
            primeryKey: true,
            autoincrement: true
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.INTEGER,

        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },

    };
    const configuracion ={ 
        tableName: "movies",
        timestamps: false
    };
    
    
    const Pelicula = sequelize.define(alias, columnas, configuracion);

    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Generos, {
            as:"generos",
            foreignKey: "genre_id"
        })

        Pelicula.belongsToMany(models.Actores, {
            as:"actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }

    return Pelicula;

}