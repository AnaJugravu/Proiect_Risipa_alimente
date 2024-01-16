export const PersonTemplate = (db, DataTypes) => {
    return db.define("person", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nume: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenume: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    }, {
        underscored: true
    });
}