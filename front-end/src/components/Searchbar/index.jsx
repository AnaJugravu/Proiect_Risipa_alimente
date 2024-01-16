import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

const Searchbar = ({ openModal, getAlimente }) => {
    const [queryTitle, setQueryTitle] = useState(null);

    const onChangeQueryTitle = (event) => {
        const searchedAlimentTitle = event.target.value;
        setQueryTitle(searchedAlimentTitle);
    }

    return (
        <div className="toolbar">
            <input onChange={onChangeQueryTitle} id="search" className="searchbar custom-text-input" type="text" placeholder="Cauta aliment" />
            <button className="custom-button search-button" onClick={() => getAlimente(queryTitle)}>Search</button>
            <button className="custom-button add-button" onClick={() => openModal()}>Adauga aliment</button>
        </div>
    );
};

export { Searchbar };