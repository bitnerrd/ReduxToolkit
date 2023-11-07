import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setNumber } from '../store/slices/item';
const Landing = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.users)
    const incrementNumber = () => {
        dispatch(setNumber(item.number + 1))
    };

    return (
        <div>
            <button type="button" className="btn btn-secondary" onClick={incrementNumber}>Increment</button>
            <h1>{item.number}</h1>
        </div>
    );
};

export default Landing;
