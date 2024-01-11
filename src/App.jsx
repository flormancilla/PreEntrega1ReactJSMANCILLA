import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./Body";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <ItemListContainer atencion={"Todos nuestros productos son originales e importados, tu compra tendrá una demora aproximada de 25 días. Gracias por comprar seguro con Rookies Argentina."}/>
        <Body />
        <Footer />
    </div>

  )
}

export default App;