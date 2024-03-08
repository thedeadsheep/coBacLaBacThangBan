import { useState } from 'react';
import './App.css';
import { Card } from "./modules/card"
import { CardRender } from "./modules/cardRender"
let BoBai = new Card()
function App() {
  const [renderCard, setRenderCard] = useState([])


  function xeBaiMoi() {
    BoBai = new Card()
  }
  function tronBai() {
    BoBai.tronBai()
    //setRenderCard(BoBai.getBaiXep())
  }
  function xaoBai() {
    BoBai.xaoBai()
    //setRenderCard(BoBai.getBaiXep())
  }
  function kiemBai() {
    BoBai.kiemBai()

  }

  function xoa() {
    setRenderCard([])
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => console.log(renderCard)}>
          check
        </button>
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

        <button onClick={xoa}>
          Xoa
        </button>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        {renderCard.length <= 0 ? "" : renderCard.map(theBai => {
          return (
            <div key={`${theBai.chatBai} ${theBai.laBai}`} style={{
              width: "fit-content"
            }}>
              <CardRender laBai={{ so: theBai.laBai, chat: theBai.chatBai }} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
