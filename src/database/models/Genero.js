module.exports = (sequelize, dataTypes) => {

    const alias = "Generos";
    const columnas = {
        id:{
            type: dataTypes.INTEGER,
            primeryKey: true,
            autoincrement: true
        },
        name:{
            type: dataTypes.STRING,
        },
        ranking:{
            type: dataTypes.INTEGER,

        },
        active:{
            type: dataTypes.INTEGER,
        },       

    };
    const configuracion ={ 
        tableName: "genres",
        timestamps: false
    };
    
    
    const Genero = sequelize.define(alias, columnas, configuracion);

    Genero.associate = function(models){
        Genero.hasMany(models.Peliculas, {
            as:"peliculas",
            foreignKey: "genre_id"
        })
    }

    return Genero;

}