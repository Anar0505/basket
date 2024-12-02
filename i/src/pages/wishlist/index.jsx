import React, { useContext } from 'react';
import { FetchFuncContext } from '../../context/fetchContext';


function Wishlist() {
    const { setWishlist,wishlist,addWishlist} = useContext(FetchFuncContext);

    return (
        <div className="wishlist-container">
        <h1 className="wishlist-header">Your Wishlist</h1>
        {wishlist.length > 0 ? (
            <div className="wishlist-items">
                {wishlist.map((item) => (
                    <div className="wishlist-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="wishlist-item-info">
                            <h3>{item.title}</h3>
                            <p>$</p>
                        </div>
                        <div className="wishlist-item-actions">
                            <button
                                className="wishlist-button add"
                                onClick={() => console.log('Move to Basket', item.id)}
                            >
                                Move to Basket
                            </button>
                            <button
                                className="wishlist-button remove"
                              onClick={()=>addWishlist(item)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="empty-wishlist">Your wishlist is empty!</p>
        )}
    </div>
    );
}

export default Wishlist;
