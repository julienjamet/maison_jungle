import plantList from '../datas/PlantList'
import CareScale from './CareScale'
import '../styles/PlantItem.css'
import '../styles/ShoppingList.css'



function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>    
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul className="plantList">
                {plantList.map((plant) => (
                    <li key={plant.id} className="plantItem">
                        <img className="plantItemCover" src={plant.cover} alt={`${plant.name} cover`} />
                        {plant.isSpecialOffer && <div className="sales">Soldes</div>}
                        {plant.name}
                        <div>
                            <CareScale careType='light' scaleValue={plant.light} />
                            <CareScale careType='water' scaleValue={plant.water} />
                        </div>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList