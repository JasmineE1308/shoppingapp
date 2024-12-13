import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"; 
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop-context";
import { CartItems} from "./pages/cart/cartitems";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<CartItems />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
