import { useState } from "react";

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Symbole @ interdit !')

    function checkValue(value) {
        if (!value.includes("@")) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)} />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm