import plantList from "../datas/PlantList"
import CareScale from "./CareScale"
import "../styles/PlantItem.css"

function ShoppingList({ cart, updateCart }) {
  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name)

    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )

      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div>
      <ul className="plantList">
        {plantList.map((plant) => (
          <li key={plant.id} className="plantItem">
            <img
              className="plantItemCover"
              src={plant.cover}
              alt={`${plant.name} cover`}
            />

            {plant.isSpecialOffer && <div className="sales">Soldes</div>}
            <span className="plantName">{plant.name}</span>

            <div>
              <CareScale careType="light" scaleValue={plant.light} />
              <CareScale careType="water" scaleValue={plant.water} />
            </div>

            <button
              className="add-button"
              onClick={() => addToCart(plant.name, plant.price)}
            >
              Ajouter
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList