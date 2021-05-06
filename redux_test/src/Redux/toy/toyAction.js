import { BUY_TOY, SELL_TOY } from './toyTypes';

export const buyToy = () => {
    return {
        type : BUY_TOY
    }
}

export const sellToy = () => {
    return {
        type : SELL_TOY
    }
}