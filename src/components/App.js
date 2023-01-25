import Banner from "./Banner";
import Cart from "./Cart";
import Radio from "./Radio";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <div>
      <Banner />

      <div className="main">
        <Cart cart={cart} updateCart={updateCart} />
        <Radio
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          selectedRadio={selectedRadio}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
