class Card {
    #boBai;
    #baiXep = [];
    constructor() {
        this.#boBai = Array.from({ length: 4 }, () =>
            new Array(13).fill(0));
    }
    tronBai() {
        let vt = 0
        while (vt !== 52) {
            let laBai = ramdomnize(13)
            let chatBai = ramdomnize(4)
            if (this.#boBai[chatBai][laBai] === 0) {
                this.#boBai[chatBai][laBai] = 1
                vt = vt + 1
                this.#baiXep.push({ chatBai, laBai })
            }
        }
    }
    kiemBai() {
        console.log("BoBai", this.#boBai)
        console.log("baiXep", this.#baiXep)
    }
    xaoBai() {
        let pos1 = ramdomnize(52)
        let pos2 = ramdomnize(pos1)
        let mem = pos1 + 1
        let arr = []
        for (let i = pos2; i <= pos1; i++) {
            arr.push(this.#baiXep[i])
        }
        for (let i = pos2; i >= 0; i--) {
            this.#baiXep[mem] = this.#baiXep[i]
            mem--
        }
        for (let i = 0; i <= pos1 - pos2; i++) {
            this.#baiXep[i] = arr[i]
        }
    }
    getBaiXep() {
        return this.#baiXep
    }

}
function ramdomnize(max) {
    return Math.floor(Math.random() * max);
}
export {
    Card
}