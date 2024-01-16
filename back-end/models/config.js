import { DataTypes, Sequelize } from "sequelize";
import { AlimentTemplate } from "./alimente.js";
import { CollectionTemplate } from "./collections.js";
import { PersonTemplate } from "./persons.js";

export const db = new Sequelize({
   dialect: "sqlite",
   storage: "database.db"
});

export const Aliment = AlimentTemplate(db, DataTypes);
export const Collection = CollectionTemplate(db, DataTypes);
export const Person = PersonTemplate(db, DataTypes);

Aliment.belongsToMany(Collection, { through: "aliment_collections" });
Collection.belongsToMany(Aliment, { through: "aliment_collections" });

Person.hasMany(Collection);
Collection.belongsTo(Person);

export const synchronizeDatabase = async () => {
   await db.authenticate();
   await db.sync();
};
