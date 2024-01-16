import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const alimente = useSelector((state) => state.alimente);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Page not found.</h1>
            <div>{`Poti vedea lista cu ${alimente.length} alimente aici`} <span onClick={() => navigate('/alimente')}>here</span></div>
        </div>
    );
};

export { NotFound };