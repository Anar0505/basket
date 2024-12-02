import React, { useContext } from 'react'

import "./basket.css"
import { FetchFuncContext } from '../../context/fetchContext'
import { Helmet } from 'react-helmet-async'

function Basket() {

    const [products, isLoading,basket,setBasket,addBasket,updateCount,removeItem,clearBasket,totalPrice] = useContext(FetchFuncContext)
 

  return (<>
    <Helmet><title>Basket </title></Helmet>
    <div className="basket-container">
            <h1>Your Basket</h1>
            {basket.length > 0 ? (
                <>
                    <div className="basket-items">
                        {basket.map((item, index) => (
                            <div className="basket-item" key={index}>
                                <img src={item.image} alt={item.title} className="basket-item-image" />
                                <div className="basket-item-info">
                                    <h3>{item.title}</h3>
                                    <p>Count : {item.count}</p>
                                    <p>${item.price*item.count}</p>
                                </div>
                                <div className="basket-item-count">
                                        <button onClick={() => updateCount(item.id, item.count - 1)}>-</button>
                                        <span>{item.count}</span>
                                        <button onClick={() => updateCount(item.id, item.count + 1)}>+</button>
                                    </div>
                                <button
                                    className="remove-button"
                                onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="basket-summary">
                        { <h3>Total: ${totalPrice.toFixed(2)}</h3> }
                        <div className="basket-actions">
                            <button className="clear-basket" onClick={()=> clearBasket()}>
                                Clear Basket
                            </button>
                          
                        </div>
                    </div>
                </>
            ) : (
                <p>Your basket is empty!</p>
            )}
        </div>
        </>)
}

export default Basket