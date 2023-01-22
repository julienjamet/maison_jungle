import { useState } from "react"
import plantList from "../datas/PlantList"

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    return isOpen ? (
    <div className="cart">
        <button className="toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>

        <h2>Panier</h2>
        {cart.map(({ name, price, amount }, index) => (
            <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
            </div>
        ))}
        <h3>Total : {total}€</h3>
        <button className="emptyCart" onClick={() => updateCart([])}>Vider le panier</button>
    </div>
    ) : (
        <div className="cart-closed">
            <button className="toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart