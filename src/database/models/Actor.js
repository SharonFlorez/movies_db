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
        timestamps: true
    };
    
    
    const Actor = sequelize.define(alias, columnas, configuracion);

    return Actor;

}