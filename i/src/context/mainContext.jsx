import React, { createContext } from 'react'
import FetchContext from './fetchContext'
// import BasketProvider from './basketContext'




function MainContext({children}) {
  return (
    <>
    <FetchContext>
    {children}
    </FetchContext>
    {/* <BasketProvider>
{children}
    </BasketProvider> */}
    </>
  )
}

export default MainContext