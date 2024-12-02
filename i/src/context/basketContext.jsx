import React, { createContext } from 'react'

const BasketContext = createContext()





function BasketProvider({ children }) {

    const [basket, setBasket] = useLocalStorage("basket", [])

    function addBasket(product) {
        const elementindex = basket.findIndex(x => x.id === product.id)
        if (elementindex === -1) {
            setBasket([...basket, { ...product, count: 1 }])
            return
        }
        basket[elementindex].count++
        setBasket([...basket])
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
        basket = 
        setBasket([...basket]);
    }

    return (
        <BasketContext.Provider value={[basket, setBasket, addBasket, updateCount,removeItem,clearBasket]}>{children}</BasketContext.Provider>

    )
}

export default BasketProvider