import { useState } from "react"

function Radio() {
    const radios = ["Plantes classiques", "Plantes grasses", "Plantes d'extérieur"]
    const [selectedRadio, setSelectedRadio] = useState("")

    return (
        <div className="range">
            {radios.map((category) => (
                <>
                    <input
                        type="radio"
                        id={category}
                        name="categoryName"
                        checked={category === selectedRadio}
                        onChange={(e) => setSelectedRadio(e.target.id)}
                    />
                    <label htmlFor={category}>{category}</label>
                </>
            ))}
            {selectedRadio && <button id="cancel" onClick={() => setSelectedRadio("")} >Annuler la recherche</button>}
        </div>
    )
}

export default Radio