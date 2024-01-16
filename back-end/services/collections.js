import { Collection, Aliment } from "../models/config.js";

export const getCollections = async () => {
    return await Collection.findAll({
        include: {
            model: Aliment,
            attributes: ['id', 'denumire', 'cImage']
        }
    });
}

export const getById = async (id) => {
    return await Collection.findOne({
        where: {
            id: id
        },
        include: {
            model: Aliment,
            through: {
                attributes: []
            }
        }
    });
};

export const create = async (collectionData) => {
    return await Collection.create(collectionData);
};

export const update = async (collectionUpdateData) => {
    const collection = await Collection.findOne({
        where: {
            id: collectionUpdateData.id
        }
    });

    if (!!collection) {
        delete collectionUpdateData.id;
        collection.set({
            ...collectionUpdateData
        });

        await collection.save();
    }
}

export const remove = (id) => {
    Collection.destroy({
        where: {
            id: id
        }
    });
}