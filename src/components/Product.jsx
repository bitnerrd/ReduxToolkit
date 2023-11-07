import React from 'react'
import Products from "../assets/data/products.json"

const Product = () => {
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
                                <a href="#" className="btn btn-outline-secondary mt-2">Put Into Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product
