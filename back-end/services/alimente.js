import { Op } from "sequelize";
import { Collection, Aliment } from "../models/config.js";

export const getAlimente = async (query) => {
    delete query.id;

    const where = Object.keys(query).map(key => {
        if (key === "denumire") {
            return { [key]: { [Op.like]: `%${query[key]}%` } }
        }

        return { [key]: query[key] }
    });

    return await Aliment.findAll({
        attributes: ['id', 'denumire', 'dataExpirare', 'categorie', 'producator', 'stocDisponibil', 'cImage', 'pret'],
        where: where
    });
};

export const getById = async (id) => {
    const aliment = await Aliment.findOne({
        where: {
            id: id
        },
        include: {
            model: Collection,
            through: {
                attributes: []
            }
        }
    });

    return aliment;
};

export const create = async (aliment) => {
    const produs = await Aliment.create(aliment);

    if (!!aliment.collectionId) {
        await produs.addCollection(aliment.collectionId);
    }

    return produs;
};

export const update = async (alimentUpdateData) => {
    const aliment = await Aliment.findOne({
        where: {
            id: alimentUpdateData.id
        }
    });

    if (!!aliment) {
        delete alimentUpdateData.id;

        aliment.set({
            ...alimentUpdateData
        });

        if (!!alimentUpdateData.collectionId) {
            await aliment.addCollection(alimentUpdateData.collectionId);
        }

        await aliment.save();
    }
}

export const remove = (id) => {
    Aliment.destroy({
        where: {
            id: id
        }
    });
}