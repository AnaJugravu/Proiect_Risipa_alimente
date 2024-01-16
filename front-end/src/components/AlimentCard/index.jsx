import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './style.css';

const AlimentCard = ({ aliment, onDelete }) => {
    return (
        <div className="aliment-container">
            <img alt="imagine aliment" className="poster-container" src={aliment.cImage} />
            <div className="aliment-info-container">
                <div className="aliment-header">
                    <h4 className="alimentTitle">
                        {`${aliment.denumire}`}
                    </h4>
                    <button className="remove-btn" onClick={() => onDelete(aliment)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className="aliment-specs">
                    <div>
                        <p>{`Producator: ${aliment.producator}`}</p>
                        <p>{`Categorie: ${aliment.categorie}`}</p>
                    </div>
                    <div>
                        <p>{`Stoc disponibil: ${aliment.stocDisponibil}`}</p>
                        <p>{`Pret: ${aliment.pret} lei`}</p>
                    </div>
                </div>
                <div className="aliment-dataE">
                    {`Data expirare: ${aliment.dataExpirare.split("T")[0]}`}
                </div>
            </div>
        </div>
    )
};

export { AlimentCard };