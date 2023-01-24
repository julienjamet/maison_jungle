import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("L'adresse mail n'est pas valide ! Elle ne contient pas d'arobase !")
        }
    }

	return (
		<footer className='footer'>
			<div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='footer-elem'>Laissez-nous votre mail :</div>
            <input placeholder='Entrez votre adresse mail' onChange={handleInput} value={inputValue} onBlur={handleBlur} />
		</footer>
	)
}

export default Footer