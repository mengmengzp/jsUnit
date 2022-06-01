const delay = callback => {
    setTimeout(() => {
        callback && callback();
    }, 1000);
}
const delayPromise = callback => {
    return new Promise((reslove, reject) => {
        try {
            setTimeout(() => {
                const res = callback && callback();
                reslove(res);
            }, 1000);
        }catch(e) {
            reject(e);
        }
    })
}
module.exports = {
    delay,
    delayPromise
};