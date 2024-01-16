import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setAlimente } from '../../reducers/alimente-reducer';

const SERVER_URL = "http://localhost:8080/api/v1";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${SERVER_URL}/alimente`)
            .then(res => res.json())
            .then(data => dispatch(setAlimente(data.alimente)));
    }, []);

    return (
        <div className='home'>
            <div className='content-div'>
                <h1>Lista alimente</h1>
                <button className='custom-button' onClick={() => navigate('/alimente')}>View now</button>
            </div>
        </div>
    )
};

export { Home };