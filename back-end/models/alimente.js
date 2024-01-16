export const AlimentTemplate = (db, DataTypes) => {
    return db.define("aliment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        denumire: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataExpirare: {
            type: DataTypes.DATE
        },
        categorie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        producator: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stocDisponibil: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cImage: {
            type: DataTypes.STRING
        },
        pret: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
        {
            underscored: true,
        })
};