
const { useState } = require("react")

const InputComponent = () => {
    const [inputValue, setInputValue] = useState("")


    function inputHandler(e) {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    return (
        <div>

            <input onChange={(e) => inputHandler(e)} />

        </div>
    )
}
export default InputComponent