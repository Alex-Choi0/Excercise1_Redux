import { BUY_COOKIE, SELL_COOKIE } from './cookieTypes';

export const buyCookie = (num = 1) => {
    return {
        type : BUY_COOKIE,
        payload : num
    }
}

export const sellCookie = (num = 1) => {
    return {
        type : SELL_COOKIE,
        payload : num
    }
}