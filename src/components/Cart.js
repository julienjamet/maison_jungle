import { useEffect, useState } from "react";

function Cart({ cart, updateCart }) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  const totalNotif = cart.reduce((acc, plantType) => acc + plantType.amount, 0);

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (total !== 0) {
      document.title = `Maison Jungle : ${total} €`;
    } else {
      document.title = `Maison Jungle`;
    }
  }, [total]);

  function deleteItem(name, price) {
    const currentPlantDeleted = cart.find((plant) => plant.name === name);

    if (currentPlantDeleted) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      if (currentPlantDeleted.amount >= 2) {
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantDeleted.amount - 1 },
        ]);
      } else {
        updateCart([...cartFilteredCurrentPlant]);
      }
    } else {
      updateCart([cart.filter((plant) => plant !== currentPlantDeleted)]);
    }
  }

  return showCart ? (
    <div className="cart">
      <div className="cross" onClick={() => setShowCart(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h2>Votre panier</h2>

      {cart.map(({ name, price, amount }, index) => (
        <div key={`${index}`} className="item">
          {name} {price} € x {amount}{" "}
          <div className="delete-item" onClick={() => deleteItem(name, price)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      ))}

      <h3>Total : {total} €</h3>

      <button className="emptyCart" onClick={() => updateCart([])}>
        Vider le panier
      </button>
    </div>
  ) : (
    <div className="cart-icon">
      <i
        className="fa-solid fa-cart-shopping"
        onClick={() => setShowCart(true)}
      ></i>
      {totalNotif !== 0 && <span className="notif">{totalNotif}</span>}
    </div>
  );
}

export default Cart;
