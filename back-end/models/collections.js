export const CollectionTemplate = (db, DataTypes) => {
    return db.define("collection", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        denumire: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cImage: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true
    });
}