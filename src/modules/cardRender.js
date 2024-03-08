import style from "./cardRender.module.css"
const CardRender = (props) => {
    function baiNormalize(bai) {
        let so = 0
        let chat = -1
        switch (bai.so) {
            case 1:
                so = "A"
                break;
            case 11:
                so = "J"
                break;
            case 12:
                so = "Q"
                break;
            case 13:
                so = "K"
                break;
            default:
                so = bai.so
        }
        switch (bai.chat) {
            case 0:
                chat = "♠"
                break;
            case 1:
                chat = "♣"
                break;
            case 2:
                chat = "♦"
                break;
            default:
                chat = "♥"
        }
        return {
            so: so,
            chat: chat
        }
    }
    const laBai = baiNormalize(props.laBai) || { so: 0, chat: -1 }
    return (
        <div className={`${style.cardBorder} ${style.layout}`}>
            <div className={style.fixedLeft}>
                <p className={`${style.zeroSpace}`}>
                    {laBai.so}
                </p>
                <p className={`${style.zeroSpace}`}>
                    {laBai.chat}
                </p>
            </div>
            <div className={style.bigImage}>
                {laBai.so}
            </div>
            <div className={style.fixedRight}>

                <p className={`${style.zeroSpace}`}>
                    {laBai.chat}
                </p>
                <p className={`${style.zeroSpace}`}>
                    {laBai.so}
                </p>
            </div>
        </div>
    )
}

export {
    CardRender
}