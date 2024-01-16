import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import "./style.css";

const CreateAlimentModal = ({ onAddAliment, closeModal }) => {
    const [denumire, setDenumire] = useState("");
    const [dataExpirare, setDataExpirare] = useState("");
    const [categorie, setCategorie] = useState("");
    const [producator, setProducator] = useState("");
    const [stocDisponibil, setStocDisponibil] = useState(0);
    const [cImage, setCImage] = useState("");
    const [pret, setPret] = useState(0);

    const onChangeDenumire = (event) => {
        setDenumire(event.target.value);
    }

    const onChangeDataExpirare = (event) => {
        setDataExpirare(event.target.value);
    }

    const onChangeCategorie = (event) => {
        setCategorie(event.target.value);
    }

    const onChangeProducator = (event) => {
        setProducator(event.target.value);
    }

    const onChangeStocDisponibil = (event) => {
        setStocDisponibil(event.target.value);
    }

    const onChangeCImage = (event) => {
        setCImage(event.target.value);
    }

    const onChangePret = (event) => {
        setPret(event.target.value);
    }

    const saveAliment = (event) => {
        event.preventDefault();
        onAddAliment({ denumire, dataExpirare, categorie, producator, stocDisponibil, cImage, pret });
        closeModal();
    }

    return (
        <dialog id="CreateAlimentModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add aliment</h2>
                    <span className="modal-close" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></span>
                </div>
                <form id="addAlimentForm" className="create-form">
                    <label htmlFor="denumire">Denumire:</label>
                    <input onChange={onChangeDenumire} className="custom-text-input" type="text" id="denumire" name="denumire" required /><br />

                    <label htmlFor="dataExpirare">Data expirare:</label>
                    <input onChange={onChangeDataExpirare} className="custom-text-input" type="text" id="dataExpirare" name="dataExpirare" required /><br />

                    <label htmlFor="categorie">Categorie:</label>
                    <input onChange={onChangeCategorie} className="custom-text-input" type="text" id="categorie" name="categorie" required /><br />

                    <label htmlFor="producator">Producator:</label>
                    <input onChange={onChangeProducator} className="custom-text-input" type="text" id="producator" name="producator" required /><br />

                    <label htmlFor="stocDisponibil">Stoc disponibil:</label>
                    <input onChange={onChangeStocDisponibil} className="custom-text-input" type="number" id="stocDisponibil" name="stocDisponibil" required /><br />

                    <label htmlFor="cImage">Image:</label>
                    <input onChange={onChangeCImage} className="custom-text-input" type="url" id="cImage" name="cImage" required /><br />

                    <label htmlFor="pret">Pret:</label>
                    <input onChange={onChangePret} className="custom-text-input" type="number" id="pret" name="pret" required /><br />

                    <button className="custom-button" onClick={saveAliment}>Save</button>
                </form>
            </div>
        </dialog>
    )
};

export { CreateAlimentModal };