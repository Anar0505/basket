import React, { useEffect } from 'react'
import { useState, createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const FetchFuncContext = createContext()

function FetchContext({children}) {
  const [products, setproducts] = useState("")
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setproducts(data)
        setisLoading(false)
      }
      )
  }, [])

  const [basket, setBasket] = useLocalStorage("basket",[])

  function addBasket(product) {
     const elementindex = basket.findIndex(x=>x.id===product.id)
     if (elementindex===-1) {
           setBasket([...basket,{...product,count:1}])
         return
     }
  basket[elementindex].count++
  setBasket([...basket])
  }

  const [wishlist,setWishlist] = useLocalStorage("wishlist",[])

  function addWishlist(product) {
    const elementindex = wishlist.findIndex(x=>x.id===product.id)
    if (elementindex===-1){
      setWishlist([...wishlist,{...product,isWished:true}])
      return 
    }

  }
  function updateCount(productId, newCount) {
    const elementIndex = basket.findIndex((x) => x.id === productId);
    if (elementIndex !== -1) {
        if (newCount <= 0) {
            basket.splice(elementIndex, 1);
        } else {
            basket[elementIndex].count = newCount;
        }
        setBasket([...basket]);
    }
}
function removeItem(itemID) {
  const elementIndex = basket.findIndex((x) => x.id === itemID);
  basket.splice(elementIndex, 1);
  setBasket([...basket]);
}
function clearBasket(){
 
  setBasket([]);
}





const totalPrice = basket.reduce((acc, item) => acc + item.price * item.count, 0);
  return (
    <FetchFuncContext.Provider value={[products, isLoading,basket,setBasket,addBasket,updateCount,removeItem,clearBasket,totalPrice,setWishlist,wishlist,addWishlist]}>{children}</FetchFuncContext.Provider>
  )
}
export default FetchContext