import { configureStore } from '@reduxjs/toolkit';
import alimenteReducer from '../reducers/alimente-reducer';

export default configureStore({
    reducer: alimenteReducer
});