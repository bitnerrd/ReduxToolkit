import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNumber } from '../store/slices/item';

const Check = () => {
    const item = useSelector(state => state.users)
    return (
        <div>
            <div>Fetching from Store</div>
            <h1>{item.number}</h1>
        </div>
    )
}
export default Check;