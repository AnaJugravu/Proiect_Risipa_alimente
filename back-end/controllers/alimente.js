import * as alimenteService from "../services/alimente.js";

const getAlimente = async (req, res) => {
    res.send({ alimente: await alimenteService.getAlimente(req.query) });
};

const getById = async (req, res) => {
    const identifiedAliment = await alimenteService.getById(req.params.id);

    if (!!identifiedAliment) {
        res.send({ alimente: identifiedAliment });
    } else {
        res.status(404).send();
    }
};

const create = async (req, res) => {
    if (!req.body.denumire || !req.body.producator || !req.body.pret) {
        return res.status(400).send({ message: "Missing data" });
    }

    const existingAlimente = await alimenteService.getAlimente({ denumire: req.body.denumire, producator: req.body.producator, pret: req.body.pret });
    if (existingAlimente.length !== 0) {
        return res.status(400).send({ message: "Already exists" });
    }

    await alimenteService.create(req.body);
    res.status(201).send();
};

const update = async (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ message: "Id is mandatory" });
    }

    await alimenteService.update(req.body);
    res.status(204).send();
}

const remove = (req, res) => {
    alimenteService.remove(req.params.id);
    res.send();
}

export {
    getAlimente,
    getById,
    create,
    update,
    remove
}