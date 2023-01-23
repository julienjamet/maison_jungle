function Cart({ cart, updateCart }) {

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  return (
    <div className="cart">
      <h2>Votre panier</h2>

      {cart.map(({ name, price, amount }, index) => (
        <div key={`${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}

      <h3>Total : {total}€</h3>

      <button className="emptyCart" onClick={() => updateCart([])}>
        Vider le panier
      </button>
    </div>
  )
}

export default Cart