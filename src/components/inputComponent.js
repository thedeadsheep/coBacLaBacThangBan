import { Card } from "../modules/card"

const { useState } = require("react")

const InputComponent = () => {
    const [inputValue, setInputValue] = useState("")
    let BoBai = new Card()

    function inputHandler(e) {
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    function xeBaiMoi() {
        BoBai = new Card()
    }
    function tronBai() {
        BoBai.tronBai()
    }
    function xaoBai() {
        BoBai.xaoBai()
    }
    function kiemBai() {
        BoBai.kiemBai()
    }

    return (
        <div>
            <button onClick={xeBaiMoi}>
                Bo bai moi
            </button>
            <button onClick={tronBai}>
                Tron bai
            </button>
            <button onClick={xaoBai}>
                Xao bai
            </button>
            <button onClick={kiemBai}>
                kiem bai
            </button>

            <input onChange={(e) => inputHandler(e)} />

        </div>
    )
}
export default InputComponent