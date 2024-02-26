import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import Error404 from "./components/Error404";
import Checkout from "./components/Checkout";
import Escuderia from "./components/Escuderias";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}></Route>
          <Route path={"/category/:id"} element={<ItemListContainer />}></Route>
          <Route path={"item/:id"} element={<ItemDetailContainer />}></Route>
          <Route path={"/escuderia/:id"} element={<Escuderia />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
          <Route path={"checkout"} element={<Checkout/>}></Route>
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;