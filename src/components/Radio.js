function Radio({ selectedRadio, setSelectedRadio }) {
    const radios = ["Plantes classiques", "Plantes grasses", "Plantes d'extérieur"]

    function filter(id) {
        setSelectedRadio(id)
    }

    return (
        <ul className="range">
            {radios.map((category, index) => (
                <li key={index}>
                    <input
                        type="radio"
                        id={category}
                        name="categoryName"
                        checked={category === selectedRadio}
                        onChange={(e) => filter(e.target.id)}
                    />
                    <label htmlFor={category}>{category}</label>
                </li>
            ))}
            {selectedRadio && <button id="cancel" onClick={() => setSelectedRadio("")} >Annuler la recherche</button>}
        </ul>
    )
}

export default Radio