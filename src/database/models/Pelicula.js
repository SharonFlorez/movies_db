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
        timestamps: true
    };
    
    
    const Pelicula = sequelize.define(alias, columnas, configuracion);

    return Pelicula;

}