import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import Card from '../../components/card/card'
import "./home.css"
import { TrophySpin } from 'react-loading-indicators'
import { FetchFuncContext } from '../../context/fetchContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import { getElementByIdFromApi } from '../../services/fetch'

import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    const [products, isLoading, basket, setBasket, addBasket,setWishlist,wishlist,addWishlist] = useContext(FetchFuncContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();



    return (<>
<Helmet>
    <title>Home</title>
</Helmet>
        <div className="container">
            <h1>Məhsul Kartları</h1>
            <div className="product-container">
                {isLoading ? <TrophySpin color="#32cd32" size="medium" text="" textColor="" /> : products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="card-content">
                            <h3 className="card-title" onClick={() => navigate("/detail/" + product.id)}>{product.title}</h3>
                            <p className="card-price">${product.price}</p>
                            <p className="card-description">{product.description}</p>
                            <div className="card-buttons">
                        { product.count? <button className="add-to-basket" onClick={() => addBasket(product)}>Raise Count</button> :   <button className="add-to-basket" onClick={() => addBasket(product)}>Add to Basket</button>}
                                <button className="add-to-wishlist" onClick={()=> addWishlist(product)}>Add to Wishlist</button>
                                <button className="buy-now">Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Home