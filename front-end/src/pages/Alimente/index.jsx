import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAliment as addAlimentAction } from '../../reducers/alimente-reducer';

import { AlimentCard } from '../../components/AlimentCard';

import './style.css';
import { CreateAlimentModal } from '../../components/CreateAlimentModal';
import { Searchbar } from '../../components/Searchbar';

const SERVER_URL = "http://localhost:8080/api/v1";

const Alimente = () => {
    const [alimente, setAlimente] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const getAlimente = (queryTitle) => {
        const queryParams = new URLSearchParams();

        if (!!queryTitle) {
            queryParams.append("denumire", queryTitle);
        }

        fetch(`${SERVER_URL}/alimente?` + queryParams)
            .then(res => res.json())
            .then(data => setAlimente(data.alimente));
    };

    const addAliment = (aliment) => {
        fetch(`${SERVER_URL}/alimente`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(aliment)
        })
            .then(res => {
                dispatch(addAlimentAction(aliment));
                getAlimente();
            })
            .catch(err => console.log(err));
    }

    const deleteAliment = (aliment) => {
        fetch(`${SERVER_URL}/alimente/${aliment.id}`, { method: "DELETE" })
            .then(res => getAlimente())
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAlimente();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div className="container">
                <h3>Lista alimente: </h3>
                <Searchbar openModal={openModal} getAlimente={getAlimente} />
                <div id="alimenteContainer">
                    {alimente.map((aliment, index) => (
                        <AlimentCard aliment={aliment} key={index} onDelete={deleteAliment} />
                    ))}
                </div>
            </div>
            {isModalOpen && <CreateAlimentModal onAddAliment={addAliment} closeModal={closeModal} />}
        </div>
    )
};

export { Alimente };