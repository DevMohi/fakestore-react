import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'


const AllProducts = (props) => {
    const {setCartCount} = props
    // state is like store 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>All Products</h1>

            <div className="row contianer">
                {
                    products.map(pd => <Product setCartCount = {setCartCount}  key={pd.id} product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;