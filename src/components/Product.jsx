import React from 'react'
import Products from "../assets/data/products.json"

import { useDispatch, useSelector } from 'react-redux'
import { setAddItem } from '../store/slices/item'


const Product = () => {
    const dispatch = useDispatch();

    const item = useSelector(state => state.items)

    const addCart = () => {
        dispatch(setAddItem(item.number + 1))

        console.log(`Triggered ${Date.now()}`)

    }
    return (
        <div className="container mt-5">
            <div className="row">
                {Products.map((product) => (
                    <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img src={product.picture} className="card-img-top" alt={product.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text mt-auto">${product.price}</p>
                                <button className="btn btn-outline-secondary mt-2" onClick={addCart}>Put Into Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product
