import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import MainLayout from './layout/mainLayout';
import AddPage from './pages/add';
import Detail from './pages/detail';
import MainContext from './context/mainContext';
import Basket from './pages/basket';
import Wishlist from "./pages/wishlist";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
      <HelmetProvider>
       
          <MainContext>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />

                  <Route path="/addpage" element={<AddPage />} />
                  <Route path="/basket" element={<Basket />} />
                  <Route path='/detail/:id' element={<Detail />} />
                  <Route path='/wishlist' element={<Wishlist />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </MainContext>
        
      </HelmetProvider>
    </>
  )
}

export default App
