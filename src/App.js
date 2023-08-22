import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/tienda" element={<Store/>}></Route>
        <Route exact path="/temporada/:season" element={<Store/>}></Route>
        <Route exact path="/producto/:id" element={<ProductDetail/>}></Route>
        <Route exact path="/perfil" element={<Profile/>}></Route>
        <Route exact path="/carrito" element={<Cart/>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
