import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./Body";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Navbar />
      <Body />
      <Footer />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}></Route>
        <Route path={"/category/:id"} element={<ItemListContainer/>}></Route>
        <Route path={"item/:id"} element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;